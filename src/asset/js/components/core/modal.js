import Modal from '../mixin/modal';
import {
    $,
    addClass,
    css,
    Deferred,
    hasClass,
    height,
    html,
    isString,
    on,
    removeClass,
} from '../../util';

export default {
    install,

    mixins: [Modal],

    data: {
        clsPage: 'mui-modal-page',
        selPanel: '.mui-modal-dialog',
        selClose:
            '.mui-modal-close, .mui-modal-close-default, .mui-modal-close-outside, .mui-modal-close-full',
    },

    events: [
        {
            name: 'show',

            self: true,

            handler() {
                if (hasClass(this.panel, 'mui-margin-auto-vertical')) {
                    addClass(this.$el, 'mui-flex');
                } else {
                    css(this.$el, 'display', 'block');
                }

                height(this.$el); // force reflow
            },
        },

        {
            name: 'hidden',

            self: true,

            handler() {
                css(this.$el, 'display', '');
                removeClass(this.$el, 'mui-flex');
            },
        },
    ],
};

function install({ modal }) {
    modal.dialog = function (content, options) {
        const dialog = modal(
            `<div class="mui-modal">
                <div class="mui-modal-dialog">${content}</div>
             </div>`,
            options
        );

        dialog.show();

        on(
            dialog.$el,
            'hidden',
            async () => {
                await Promise.resolve();
                dialog.$destroy(true);
            },
            { self: true }
        );

        return dialog;
    };

    modal.alert = function (message, options) {
        return openDialog(
            ({ i18n }) => `<div class="mui-modal-body">${
                isString(message) ? message : html(message)
            }</div>
            <div class="mui-modal-footer mui-text-right">
                <button class="mui-button mui-button-primary mui-modal-close" autofocus>${
                    i18n.ok
                }</button>
            </div>`,
            options,
            (deferred) => deferred.resolve()
        );
    };

    modal.confirm = function (message, options) {
        return openDialog(
            ({ i18n }) => `<form>
                <div class="mui-modal-body">${isString(message) ? message : html(message)}</div>
                <div class="mui-modal-footer mui-text-right">
                    <button class="mui-button mui-button-primary" autofocus>${i18n.ok}</button>
                    <button class="mui-button mui-button-default mui-modal-close" type="button">${i18n.cancel}</button>
                </div>
            </form>`,
            options,
            (deferred) => deferred.reject()
        );
    };

    modal.prompt = function (message, value, options) {
        return openDialog(
            ({ i18n }) => `<form class="mui-form-stacked">
                <div class="mui-modal-body">
                    <label>${isString(message) ? message : html(message)}</label>
                    <input class="mui-input" value="${value || ''}" autofocus>
                </div>
                <div class="mui-modal-footer mui-text-right">
                    <button class="mui-button mui-button-default mui-modal-close" type="button">${
                        i18n.cancel
                    }</button>
                    <button class="mui-button mui-button-primary">${i18n.ok}</button>
                </div>
            </form>`,
            options,
            (deferred) => deferred.resolve(null),
            (dialog) => $('input', dialog.$el).value
        );
    };

    modal.i18n = {
        ok: '확인',
        cancel: '취소',
    };

    function openDialog(tmpl, options, hideFn, submitFn) {
        options = {
            bgClose: true,
            escClose: true,
            role: 'alertdialog',
            i18n: modal.i18n,
            ...options,
        };

        const dialog = modal.dialog(tmpl(options), options);
        const deferred = new Deferred();

        let resolved = false;

        on(dialog.$el, 'submit', 'form', (e) => {
            e.preventDefault();
            deferred.resolve(submitFn?.(dialog));
            resolved = true;
            dialog.hide();
        });

        on(dialog.$el, 'hide', () => !resolved && hideFn(deferred));

        deferred.promise.dialog = dialog;

        return deferred.promise;
    }
}

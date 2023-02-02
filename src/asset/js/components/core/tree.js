import Class from '../mixin/class';
import {default as Togglable, toggleHeight} from '../mixin/togglable';
import {$, $$, attr, filter, getIndex, hasClass, includes, index, isInView, scrollIntoView, toggleClass, unwrap, wrapAll, before, wrapInner, fragment, apply, isVoidElement, parents} from '../../util';

export default {
  mixins: [Class, Togglable],
  props: {
    selector: String,
  },
  data: {
      selector: ' .tree-title',
      clsOpen: "tree-open",
      clsClose:"tree-close"
  },

  computed: {
    
  },

  events: [
      {

          name: 'click',
          delegate() {
            return `${this.selector}`;
          },
          handler(e) {
              e.preventDefault();
              const test = fragment('<hr />')
            //   console.log(e.current);
              const div = document.createElement('div');
              div.innerHTML = 'sdfsdfsdfsdfsdfds'
            //   apply(document.body, (el) => console.log(el))
            //   console.log(test);
            console.log(parents(e.current, 'div'))
          }
      },
      {

          name: 'scroll',

          el: window,

          handler() {

              // this.$emit('resize');

          }

      }
  ],

  methods: {
      test() {
          alert('dddddd')
      }
  },
  update: {

      read({test, aaaa}) {

          // console.log('resizeRead')
          // console.log(aaaa)
          // console.log(test)
          return {
              test: 'dddd',
              aaaa: 'dffadfsf'
          }

      },
      write({test}) {

          console.log('resizeWrite')
          // console.log(test)

      },

      events: ['resize']

  }

};

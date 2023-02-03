import Class from '../mixin/class';
import {default as Togglable, toggleHeight} from '../mixin/togglable';
import {$, $$, attr, filter, getIndex, hasClass, includes, index, isInView, scrollIntoView, toggleClass, unwrap, wrapAll, before, wrapInner, fragment, apply, isVoidElement, parents, camelize, hyphenate, ucfirst, startsWith, findIndex} from '../../util';

export default {
  mixins: [Class, Togglable],
  props: {
    selector: String,
  },
  data: {
      selector: ' .tree-title',
      clsOpen: "tree-open",
      clsClose:"tree-close",
      testTarget:".lists button"
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
            div.innerHTML = '23423'
        //   apply(document.body, (el) => console.log(el))
        //   console.log(test);
        console.log(index(e.current))

        } 
    },
    {

        name: 'click',
        delegate() {
            return `${this.testTarget}`;
        },
        handler(e) {
            e.preventDefault();
            // console.log(index(e.current))
            const arr = [1,2,3,4,5,6,7,8]
            const obj = {
                aa:1,
                bb:2
            }
            const str = 'aaa'
            const str2 = 'aaa-bbb-ccc-ddd-eee-fff'
            // console.log(startsWith(str2, 'a-'))
            // console.log(ucfirst(str))
            const func = (n) => n>3;
            console.log(findIndex(arr, func))
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

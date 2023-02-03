import Class from "../mixin/class";
import { default as Togglable, toggleHeight } from "../mixin/togglable";
import {
  $,
  $$,
  attr,
  inBrowser,
  filter,
  getIndex,
  hasClass,
  includes,
  index,
  isInView,
  scrollIntoView,
  toggleClass,
  unwrap,
  wrapAll,
  before,
  wrapInner,
  fragment,
  apply,
  isVoidElement,
  parents,
  camelize,
  hyphenate,
  ucfirst,
  startsWith,
  findIndex,
} from "../../util";

export default {
  mixins: [Class, Togglable],
  props: {
    selector: String,
  },
  data: {
    selector: " .tree-title",
    clsOpen: "tree-open",
    clsClose: "tree-close",
    testTarget: ".lists button",
    contentframe: "#content_frame"
  },

  computed: {
    // contentframe: {
    //   get() {
    //     return $(contentframe);
    //   },

    //   set(iframe) {
    //     console.log(iframe)
    //   }
    // }
  },

  events: [
    {
      name: "load hashchange popstate",
      el: inBrowser && window,
      handler(e) {
        e.preventDefault();
        console.log('load')
      },
    },
    {
      name: "click",
      delegate() {
        return `${this.selector}`;
      },
      handler(e) {
        e.preventDefault();
      },
    },
    {
      name: "click",
      delegate() {
        return `${this.testTarget}`;
      },
      handler(e) {
        e.preventDefault();
        // console.log(index(e.current))
        const arr = [1, 2, 3, 4, 5, 6, 7, 8];
        const obj = {
          aa: 1,
          bb: 2,
        };
        const str = "aaa";
        const str2 = "aaa-bbb-ccc-ddd-eee-fff";
        // console.log(startsWith(str2, 'a-'))
        // console.log(ucfirst(str))
        const func = (n) => n > 3;
        console.log(findIndex(arr, func));
      },
    },
    {
      name: "scroll",

      el: window,

      handler() {
        // this.$emit('resize');
      },
    },
  ],

  methods: {
    test() {
      alert("dddddd");
    },
  },
  update: {
    read({ url }) {
      const urlParams = new URL(location.href).searchParams;
      return {
        url: urlParams.get('url'),
      };
    },
    write({ url }) {
      if(url) attr($(this.contentframe), "src", url)
    },

    events: ["checkStatus"],
  },
};

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
    path:'url',
    selector: " .tree-title",
    clsOpen: "tree-open",
    clsClose: "tree-close",
    treeLists: ".lists button",
    contentframe: "#content_frame"
  },

  computed: {
    contentframe({contentframe}) {
      return $(contentframe);
    },
    path({path}) {
      const urlParams = new URL(location.href).searchParams;
      return urlParams.get(path)
    }
  },

  events: [
    {
      name: "load hashchange popstate",
      el: inBrowser && window,
      handler(e) {
        e.preventDefault();
        attr(this.contentframe, 'src', localStorage.getItem('url'))
      },
    },
    {
      name: "click",
      delegate() {
        return `${this.selector}`;
      },
      handler(e) {
        e.preventDefault();
        console.log(this.path)
      },
    },
    {
      name: "click",
      delegate() {
        return `${this.treeLists}`;
      },
      handler(e) {
        e.preventDefault();
        const path = attr(e.current, 'data-href');
        this.setParams(path);
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
    setMainContent() {
      console.log('sdfsdf')
    },
    setParams(path) {
      // console.log('path')
      // const url = new URL(location.href);
      // const urlParams = new URLSearchParams(url.search);
      // location.href = 'http://www.naver.com';
      // urlParams.set('url', path)
      localStorage.setItem('url', path)
      console.log(localStorage.getItem('url'))
      attr(this.contentframe, 'src', localStorage.getItem('url'))
      // console.log(url.origin +"/?"+ urlParams)
      
      // location.replace(url.origin +"/?"+ urlParams);
    }
  },
  // update: {
  //   read({ url }) {
  //     const urlParams = new URL(location.href).searchParams;
  //     return {
  //       url: urlParams.get('url'),
  //     };
  //   },
  //   write({ url }) {
  //     if(url) attr($(this.contentframe), "src", url)
  //   },

  //   events: ["checkStatus"],
  // },
};

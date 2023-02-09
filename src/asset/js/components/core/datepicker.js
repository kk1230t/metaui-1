import {$, findAll, removeClass, hasClass, toggleClass, Dimensions, height, isVisible, width, toNodes, queryAll, trigger, isNumber, $$, append, toNode} from '../../util/index';
import {cssPrefix} from 'GC-data'

export default {

  props: {
    pickerButton:Boolean
  },

  data: {
      target: '> * input',
      pcikerBtn: '>.mui_picker_btn',
      testValue:'',
      pickerButton:true,

  },

  computed: {
    // currentDate({target}, $el) {
    //   console.log($(target, $el))
    //   return $(target, $el).value;
    // }
    currentDate: {
      get({target}, $el) {
        return $(target, $el);
      },
      watch(target, testValue) {
        testValue = target.value
        this.testUpdate()
      },
      immediate: true
    }
    // pickerButton({pickerButton}, $el) {
    //   // console.log(toNode(pickerButton))
    //   if (!pickerButton) {
        
    //     return null;
    //   }
    //   console.log($el)
    //   return append($el, '<span class="mui_picker_btn"><button type="button">캘린더 열기</button></span>')
    // }
  },

  created() {
    // console.log(`created ${this.$el}`)
    const el1111 = $('<div class="kui_test"></div>')
    // console.log();
    this.$mount(el1111);
    // console.log(this.el1111);
  },
  beforeConnect() {
    console.log(`beforeConnect ${this.$el}`)
  },
  connected() {
    console.log(`connected ${this.$el}`)
    const {pickerButton, $el} = this;
    this.pickerButton = !pickerButton || append($el, '<span class="mui_picker_btn"><button type="button">캘린더 열기</button></span>')
  },
  beforeDisconnect() {
    console.log('disconnected');
  },
  disconnected() {
    console.log('disconnected');
  },
  destory() {
    console.log('destory');
  },

  events: [
    {
      name: 'click',
      delegate(){
        return this.$props.target;
      },

      handler(e) {
        e.preventDefault();
        console.log(e.current.value)
        this.$destroy()
        // console.log(this.testValue)
      }
    },
    {
      name: 'keydown',
      delegate(){
        return this.$props.target;
      },

      handler(e) {
        e.preventDefault();
        console.log(e.key)
        // console.log(this.testValue)
      }
    },
    {
      name: 'click',
      delegate() {
        return this.pcikerBtn;
      },

      handler(e) {
        e.preventDefault();
        console.log("이건가??") 
      }
    }
  ],
  // events: {
  //   click(e) {
  //     console.log(e)
  //   },
  // },

  methods: {
      test() {
          alert('dddddd')
      },
      testUpdate() {
        console.log(this.$el)
      }
  },
};


function format (f) {
  if (!this.valueOf()) return " ";
  var weekKorName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
  var weekKorShortName = ["일", "월", "화", "수", "목", "금", "토"];
  var weekEngName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var weekEngShortName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var d = this;

  return f.replace(/(yyyy|yy|MM|dd|KS|KL|ES|EL|HH|hh|mm|ss|a\/p)/gi, function ($1) {
      switch ($1) {
          case "yyyy": return d.getFullYear(); // 년 (4자리)
          case "yy": return (d.getFullYear() % 1000).zf(2); // 년 (2자리)
          case "MM": return (d.getMonth() + 1).zf(2); // 월 (2자리)
          case "dd": return d.getDate().zf(2); // 일 (2자리)
          case "KS": return weekKorShortName[d.getDay()]; // 요일 (짧은 한글)
          case "KL": return weekKorName[d.getDay()]; // 요일 (긴 한글)
          case "ES": return weekEngShortName[d.getDay()]; // 요일 (짧은 영어)
          case "EL": return weekEngName[d.getDay()]; // 요일 (긴 영어)
          case "HH": return d.getHours().zf(2); // 시간 (24시간 기준, 2자리)
          case "hh": return ((h = d.getHours() % 12) ? h : 12).zf(2); // 시간 (12시간 기준, 2자리)
          case "mm": return d.getMinutes().zf(2); // 분 (2자리)
          case "ss": return d.getSeconds().zf(2); // 초 (2자리)
          case "a/p": return d.getHours() < 12 ? "오전" : "오후"; // 오전/오후 구분
          default: return $1;
      }
  });
};
import {$, findAll, removeClass, hasClass, toggleClass, Dimensions, height, isVisible, width, toNodes, queryAll, trigger, isNumber, $$, append, toNode, addClass} from '../../util/index';
import {cssPrefix} from 'GC-data'

export default {

  props: {
    pickerButton:Boolean,
    value:String,
  },

  data: {
      target: '> * input',
      pcikerBtn: '>.mui_picker_btn',
      testValue:'',
      testBtn: '>.testbtn',
      pickerButton:true,
      value:'샘플',
      test:'ddfasdf',

  },

  computed: {
    // currentDate({target}, $el) {
    //   console.log($(target, $el))
    //   return $(target, $el).value;
    // }
    target({target}, $el) {
      console.log('target 호출')
      return $(target, $el)
    },
    targetValue({test, value}) {
      return `${test}234234233444${value}`;
    },
    // testBtn: {
    //   get({testBtn}, $el) {
    //     console.log('testBtnGet')
    //     return $$(testBtn, $el);
    //   },
    //   watch(testBtn) {
    //     console.log('바뀌고 있나??')
    //     testBtn.forEach(el => addClass(el, "testtttttttttttttt"));
    //   },
    //   immediate: true
    // },
    // currentDate: {
    //   get({target}, $el) {
    //     return $(target, $el);
    //   },
    //   watch(target, testValue) {
    //     testValue = target.value
    //     this.testUpdate()
    //   },
    //   immediate: true
    // }
    // pickerButton({pickerButton}, $el) {
    //   // console.log(toNode(pickerButton))
    //   if (!pickerButton) {
        
    //     return null;
    //   }
    //   console.log($el)
    //   return append($el, '<span class="mui_picker_btn"><button type="button">캘린더 열기</button></span>')
    // }
  },

  // created() {
  //   this.picker = 'dfdsfsfaasfasfs'
  // },
  // beforeConnect() {
  //   console.log(`beforeConnect ${this.$el}`)
  // },
  connected() {
    const {pickerButton, $el} = this;
    this.pickerButton = !pickerButton || append($el, '<span class="mui_picker_btn"><button type="button">캘린더 열기</button></span>')
  },
  // beforeDisconnect() {
  //   console.log('disconnected');
  // },
  // disconnected() {
  //   console.log('disconnected');
  // },
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
        // console.log(this.target.value)
        // this.test+='2222'

        
        // this.$destroy()
        console.log(this.targetValue)
      }
    },
    {
      name: 'keydown',
      delegate(){
        return this.$props.target;
      },

      handler(e) {
        // e.preventDefault();
        console.log(e.target)
        // this.target.value = this.value+=e.key;
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
        // this.value = 'ㅇㄴㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹㄴㅇ'
        this.targetValue = 'ㅁㄴㅇ러ㅘㅁㄴ어라몬어ㅏ'
        console.log(this) 
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
  update() {
    this.target.value = this.value
    // console.log('update')
  }
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
'use strict';
require("@babel/register")

import {series, parallel} from "gulp";
import clean from './gulp/tasks/clean';
import scss from './gulp/tasks/scss';
import javascript from './gulp/tasks/javascript';
import pug from './gulp/tasks/pug';
import watch from "./gulp/tasks/watch";
import {config} from "./gulp/config";



// javascript(taskOptionList);
// sass(taskOptionList);
// template(taskOptionList);
// watch(taskOptionList);




// const cleanRoot = () => {
//   return console.log(config11);
// }

const cleanRoot2 = series(
  clean,
  scss,
  javascript,
  pug,
  watch
)

exports.start = cleanRoot2;
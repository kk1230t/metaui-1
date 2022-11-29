'use strict';
require("@babel/register")

import {series, parallel} from "gulp";
import clean from './gulp/tasks/clean'
import pug from './gulp/tasks/pug'
import watch from "./gulp/tasks/watch";
import {config} from "./gulp/config"



// javascript(taskOptionList);
// sass(taskOptionList);
// template(taskOptionList);
// watch(taskOptionList);




// const cleanRoot = () => {
//   return console.log(config11);
// }

const cleanRoot2 = series(
  clean,
  pug,
  watch
)

exports.build = cleanRoot2;
'use strict';
require("@babel/register")

import {series, parallel} from "gulp";
import clean from './gulp/tasks/clean'
import {config} from "./gulp/config"






// const cleanRoot = () => {
//   return console.log(config11);
// }

const cleanRoot2 = series(clean)

exports.build = cleanRoot2;
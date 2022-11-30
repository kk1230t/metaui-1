import { src, dest } from 'gulp';
import {config} from "./../config";
import plugins from "./plugins";
import browserSync from 'browser-sync';
import sourcemaps from "gulp-sourcemaps";


const javascriptBuild = () => {
  // console.log(plugins)  
  return src(config.source.js)
    .pipe(sourcemaps.init())
    // .pipe(plugins.dartSass({
    //   outputStyle: config.args.production ? 'compressed' : 'expanded',
    //   precision: 10,
    //   sync: true
    // }))
    .pipe(plugins.sourcemaps.write('./'))
    .pipe(dest(config.build.js))
    .pipe(browserSync.stream());

}

export default javascriptBuild;
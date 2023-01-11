import { src, dest } from 'gulp';
import {config, buildDir} from "./../config";
import plugins from "./plugins";
import browserSync from 'browser-sync';
import autoprefixer from "autoprefixer";
import sourcemaps from "gulp-sourcemaps";


const scssBuild = () => {
  // console.log(plugins)  
  return src(config.source.scss)
    .pipe(sourcemaps.init())
    .pipe(plugins.dartSass({
      outputStyle: config.args.production ? 'compressed' : 'expanded',
      precision: 10,
      sync: true
    }))
    .pipe(plugins.sourcemaps.write('./'))
    .pipe(dest(config.build.scss))
    .pipe(browserSync.stream({ match: '**/*.css' }))
}

export default scssBuild;
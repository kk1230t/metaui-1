import { src, dest } from 'gulp';
import {config, buildDir} from "./../config";
import plugins from "./plugins";
import browserSync from 'browser-sync';


const pugBuild = (path) => {
  console.log('path ----------'+path)
  return src(config.source.pug)
  .on('error', (error) => {
    browserSync.notify(printError(error), 25000);
    reload = false;
    this.emit('end');
    console.log('errorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr')
    console.log(error)
    // logError(error.name, error.message);
  })
  .pipe(
    plugins.pug({
      pretty: true
    })
  )
  .pipe(dest(buildDir))
  .pipe(browserSync.stream())
}

export default pugBuild;
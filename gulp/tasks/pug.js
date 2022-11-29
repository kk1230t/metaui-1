import { src, dest } from 'gulp';
import {config, buildDir} from "./../config";
import plugins from "./plugins";
import browserSync from 'browser-sync';


const pugBuild = () => {
  
  return src(config.source.pug)
  .pipe(
    plugins.pug({
      pretty: true
    })
  )
  .pipe(dest(buildDir))
  .on('end', () => {
    browserSync.reload();
    console.log(plugins)
  })
}

export default pugBuild;
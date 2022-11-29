import { src, dest } from 'gulp';
import {config, buildDir} from "./../config";
import plugins from "./plugins";


const pugBuild = () => {
  
  return src(config.source.pug)
  .pipe(
    plugins.pug({
      pretty: true
    })
  )
  .pipe(dest(buildDir))
}

export default pugBuild;
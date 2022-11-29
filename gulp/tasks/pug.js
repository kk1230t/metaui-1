import { src, dest } from 'gulp';
import {config, buildDir} from "./../config";
import plugins from "./plugins";


const pugBuild = () => {
  
  return src(config.source.pug)
<<<<<<< HEAD
  .pipe(
    plugins.pug({
      pretty: true,
    })
  )
  .pipe(dest(buildDir))
=======
    .pipe(
      plugins.pug({
        pretty: true
      })
    )
    .pipe(dest(buildDir))
>>>>>>> 612b420edc6a2e66563d301b677660fff95baaf0
}

export default pugBuild;

const buildDir = "./dist/";
const sourceDir = "./src/";


const config = {
  source: {
    data: `${sourceDir}_data/`,
    scss: `${sourceDir}asset/scss/**/*.scss`,
    js: `${sourceDir}asset/js/**/*.js`,
<<<<<<< HEAD
    pug: `${sourceDir}pages/**/*.pug`,
=======
    pug: `${sourceDir}**/*.pug`,
>>>>>>> 612b420edc6a2e66563d301b677660fff95baaf0
    components: `${sourceDir}components`,
    pages: `${sourceDir}pages`,
  },
  args: {
    
  }
}

export {
  buildDir,
  sourceDir,
  config,
}
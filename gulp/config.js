
const buildDir = "./dist/";
const sourceDir = "./src/";


const config = {
  source: {
    data: `${sourceDir}_data/`,
    scss: `${sourceDir}asset/scss/**/*.scss`,
    js: `${sourceDir}asset/js/**/*.js`,
    pug: `${sourceDir}pages/**/*.pug`,
    template: `${sourceDir}components/**/*.pug`,
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
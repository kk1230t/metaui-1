
const buildDir = "./dist/";
const sourceDir = "./src/";


const config = {
  source: {
    data: `${sourceDir}_data/`,
    scss: `${sourceDir}asset/scss/**/*.scss`,
    js: `${sourceDir}asset/js/index.js`,
    pug: `${sourceDir}pages/**/*.pug`,
    template: `${sourceDir}components/**/*.pug`,
    components: `${sourceDir}components`,
    pages: `${sourceDir}pages`,
  },
  build: {
    scss: `${buildDir}css/`,
    js: `${buildDir}js/`,
    pug: `${buildDir}html/`,
  },
  args: {
    production: false,
  }
}

export {
  buildDir,
  sourceDir,
  config,
}
const sass = require('node-sass');
const sassExtract = require('sass-extract');

const rendered = sass.renderSync({
  file: '../../theme_light.scss'
});

let scssVars;
sassExtract.extract(rendered, {
  file: '../../theme_light.scss'
})
.then(vars => {
  scssVars = vars;
  console.log(vars);
});

export default scssVars;

const mix = require('laravel-mix');
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/*.html'],
  whitelistPatternsChildren: [/rabbit-lyrics/],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});
const buildHtml = require('mix-html-builder');


mix.setPublicPath('dist')
  .postCss('src/styles.css', 'dist', [
    require('postcss-nested'),
    require('tailwindcss'),
    require('autoprefixer'),
      ...process.env.NODE_ENV === 'production'
        ? [purgecss, require('cssnano')]
        : []
  ])
  .js('src/scripts.js', 'dist')
  .extract(['rabbit-lyrics'])
  .buildHtml({
    htmlRoot: 'src/index.html',
    output: '',
    partialRoot: 'src',
    minify: false
  })
  .browserSync({
    proxy: false,
    server: './dist',
    files: [
      'src/styles.css',
      'src/scripts.js',
      'src/*.html'
    ]
  });
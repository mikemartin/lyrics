const mix = require('laravel-mix');
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./*.html'],
  whitelistPatternsChildren: [/rabbit-lyrics/],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});
const buildHtml = require('mix-html-builder');


mix.postCss('src/styles.css', 'dist', [
    require('postcss-nested'),
    require('tailwindcss'),
    require('autoprefixer'),
      ...process.env.NODE_ENV === 'production'
        ? [purgecss, require('cssnano')]
        : []
  ])
  .js('src/scripts.js', 'dist')
  .buildHtml({
    htmlRoot: 'src/index.html',
    output: 'dist/index.html', // The html output file
    partialRoot: 'src'    // OPTIONAL: default partial path
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


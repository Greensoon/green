// default settings. fis3 release
fis.hook('relative');
// Global start
fis.match('*.{js,css}', {
  // useHash: true
});
//
// fis.match('*.{css,less}',{
//   release : '/$0'
// })

fis.match('_*.*',{
  release : false
})

fis.match('*.{css,less}',{
  release : false
})

fis.match('style.less',{
  release : true
})
fis.match('*.less', {
  parser: fis.plugin('less'),
  // postprocessor: fis.plugin("autoprefixer", {
  //   // https://github.com/ai/browserslist#queries
  //   "browsers": ['Firefox >= 20', 'Safari >= 6', 'Explorer >= 9', 'Chrome >= 12', "ChromeAndroid >= 4.0"],
  //   "flexboxfixer": true,
  //   "gradientfixer": true,
  // }),
  rExt: '.css'
});

// fis.match('::image', {
//   useHash: true
// });

fis.match('*.js', {
  // optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
  // optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')
});

// Global end

// default media is `dev`
// fis.media('dev')
//   .match('*', {
//     useHash: false,
//     optimizer: null
//   });
//
// // extends GLOBAL config
// fis.media('production');

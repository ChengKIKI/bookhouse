var gulp = require('gulp');
// var contentIncluder = require('./');
// var rename = require('gulp-rename');
var less = require('gulp-less');
var path = require('path');
var jade = require('gulp-jade');
var runSequence = require('gulp-sequence');

// gulp.task('concat',function() {
//     gulp.src("./pages/index.html")
//         .pipe(contentIncluder({
//             includerReg:/<!\-\-include\s+"([^"]+)"\-\->/g,
//             deepConcat: true,
//             baseSrc: './'
//         }))
//         // .pipe(rename('index.html'))
//         .pipe(gulp.dest('./dist/pages'));
// });
gulp.task('less', function () {
  return gulp.src('./static/style/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./dist/static/style'));
});
gulp.task('templates', function() {
  var YOUR_LOCALS = {};
  gulp.src('./pages/*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS,
      client: true
    }))
    .pipe(gulp.dest('./dist/pages'))
});
gulp.task('run', function() {
    runSequence('less', 'templates');
});
// gulp.task('serve', ['delete'], function() {
//     gulp.start('script','less','html');
//     browserSync.init({
//         port: 2017,
//         server: {
//             baseDir: ['dist']
//         }
//     });
//     gulp.watch('src/js/*.js', ['script']);         //监控文件变化，自动更新
//     gulp.watch('src/less/*.less', ['less']);
//     gulp.watch('src/*.html', ['html']);
//     gulp.watch('src/images/*.*', ['images']);
// });
// gulp.task('run',gulp.series('less','templates'));

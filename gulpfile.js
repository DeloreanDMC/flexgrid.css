(function() {
  'use strict'

  /**
   * Requirements
   */
  var gulp = require('gulp');
  var autoprefixer = require('gulp-autoprefixer');
  var cssmin = require('gulp-cssmin');
  var rename = require('gulp-rename');
  var sass = require('gulp-sass');

  /**
   * Styles
   */
  gulp.task('styles', function() {
    return gulp.src('src/flexgrid.scss')
      .pipe(sass({
        outputStyle: 'expanded'
      }))
      .on('error', sass.logError)
      .pipe(autoprefixer())
      .pipe(gulp.dest('dist'))
      .pipe(cssmin())
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(gulp.dest('dist'));
  });

  /**
   * Watch task for development
   */
  gulp.task('watch', function() {
    gulp.watch('src/flexgrid.scss', ['styles']);
  });

  /**
   * Default task
   */
  gulp.task('default', ['styles']);
})();

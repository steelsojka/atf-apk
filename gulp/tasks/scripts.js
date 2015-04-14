'use strict';

import gulp from 'gulp';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import babelify from 'babelify';
import browserify from 'browserify';
import source from 'vinyl-source-stream';

export default gulp.task('scripts', () => {
  return browserify({
    entries: ['./src/js/index.js']
  })
    .transform(babelify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dist'));
});

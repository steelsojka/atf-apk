'use strict';

import gulp from 'gulp';
import uglify from 'gulp-uglify';

export default gulp.task('minify:scripts', () => {
  return gulp.src('./build/bundle.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build'));
});

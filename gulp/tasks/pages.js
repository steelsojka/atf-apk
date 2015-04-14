'use strict';

import gulp from 'gulp';
import jade from 'gulp-jade';

export default gulp.task('pages', () => {
  gulp.src('./src/pages/**/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./dist/pages'));
});

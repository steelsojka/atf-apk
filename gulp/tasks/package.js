'use strict';

import gulp from 'gulp';
import zip from 'gulp-zip';

export default gulp.task('package', () => {
  return gulp.src('build/**/*')
    .pipe(zip('atf-apk.zip'))
    .pipe(gulp.dest('dist'));
});

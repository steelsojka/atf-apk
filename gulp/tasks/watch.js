'use strict';

import gulp from 'gulp';

gulp.task('watch', () => {
  gulp.watch('src/**/*.jade', ['pages']);
  gulp.watch('src/**/*.js', ['scripts']);
  gulp.watch('src/**/*.css', ['styles']);
});

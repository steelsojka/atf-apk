'use strict';

import gulp from 'gulp';

export default gulp.task('assets', () => {
  gulp.src('src/assets/*')
    .pipe(gulp.dest('build/assets'));
});

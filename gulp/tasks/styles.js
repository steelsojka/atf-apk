'use strict';

import gulp from 'gulp';
import concat from 'gulp-concat';

export default gulp.task('styles', () => {
  gulp.src([
    'node_modules/normalize.css/normalize.css',
    'node_modules/flexboxgrid/dist/flexboxgrid.css',
    'src/styles/*.css'
  ])
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('./build'));
});

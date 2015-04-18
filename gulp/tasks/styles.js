'use strict';

import gulp from 'gulp';
import concat from 'gulp-concat';
import gulpif from 'gulp-if';
import minify from 'gulp-minify-css';
import { argv } from 'yargs';
import urlStripper from '../url-stripper';

export default gulp.task('styles', () => {
  return gulp.src([
    'node_modules/normalize.css/normalize.css',
    'node_modules/flexboxgrid/dist/flexboxgrid.css',
    'src/styles/*.css'
  ])
    .pipe(concat('bundle.css'))
    .pipe(urlStripper(argv.destination))
    .pipe(gulpif(argv.release, minify()))
    .pipe(gulp.dest('./build'));
});

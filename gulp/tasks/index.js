'use strict';

import gulp from 'gulp';
import jade from 'gulp-jade';
import replace from 'gulp-replace';
import pkg from '../../package.json';

export default gulp.task('index', () => {
  gulp.src('./src/index.jade')
    .pipe(jade())
    .pipe(replace('<!--scripts-->', `<script src='bundle.js?v=${pkg.version}'></script>`))
    .pipe(replace('<!--styles-->', `<link href='bundle.css?v=${pkg.version}' rel='stylesheet'>`))
    .pipe(gulp.dest('./dist'));
});

'use strict';

import gulp from 'gulp';
import jade from 'gulp-jade';
import replace from 'gulp-replace';
import pkg from '../../package.json';

export default gulp.task('pages', () => {
  gulp.src('./src/*.jade')
    .pipe(jade({ pretty: true }))
    .pipe(replace('<!--scripts-->', `<script src='bundle.js?v=${pkg.version}'></script>`))
    .pipe(replace('<!--styles-->', `<link href='bundle.css?v=${pkg.version}' rel='stylesheet'>`))
    .pipe(gulp.dest('./build'));
});

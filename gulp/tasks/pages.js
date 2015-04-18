'use strict';

import gulp from 'gulp';
import jade from 'gulp-jade';
import replace from 'gulp-replace';
import pkg from '../../package.json';
import gulpif from 'gulp-if';
import { argv } from 'yargs';
import through from 'through2';
import fs from 'fs';
import path from 'path';
import urlStripper from '../url-stripper';

const urlPrefix = urlStripper.getDestination(argv.destination);

export default gulp.task('pages', () => {
  return gulp.src('./src/pages/*.jade')
    .pipe(page('./src/wrapper.jade'))
    .pipe(gulpif(argv.release, jade(), jade({ pretty: true })))
    .pipe(replace('<!--scripts-->', `<script src='${urlPrefix}bundle.js?v=${pkg.version}'></script>`))
    .pipe(replace('<!--styles-->', `<link href='${urlPrefix}bundle.css?v=${pkg.version}' rel='stylesheet'>`))
    .pipe(urlStripper(argv.destination))
    .pipe(gulp.dest('./build'));
});

function page(wrapper) {
  const wrapperContent = fs.readFileSync(wrapper, { encoding: 'utf8' });

  function write(file, enc, cb) {
    file.contents = new Buffer(wrapperContent.replace('//content-include', `include ${path.relative('./src/pages', file.path)}`));
    this.push(file);

    cb();
  }

  return through.obj(write);
}

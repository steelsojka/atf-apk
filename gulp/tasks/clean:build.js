'use strict';

import gulp from 'gulp';
import del from 'del';
import path from 'path';

export default gulp.task('clean:build', done => {
  del([
    path.resolve(__dirname, '../../build'),
    path.resolve(__dirname, '../../dist')
  ], done);
});

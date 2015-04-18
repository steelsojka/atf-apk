'use strict';

import gulp from 'gulp';
import runSequence from 'run-sequence';
import { argv } from 'yargs';

export default gulp.task('build', done => {
  let sequence = [
    'clean:build',
    ['scripts', 'pages', 'styles', 'assets']
  ];

  if (argv.release) {
    sequence.push('minify:scripts');
    sequence.push('package');
  }

  sequence.push(done);

  runSequence(...sequence);
});

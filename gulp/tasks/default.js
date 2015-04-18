'use strict';

import gulp from 'gulp';
import runSequence from 'run-sequence';

export default gulp.task('default', done => {
  runSequence(
    'build',
    ['connect', 'watch'],
    done
  );
});

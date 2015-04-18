'use strict';

import through from 'through2';

const DESTINATIONS = {
  github: 'atf-apk/'
};

const MATCHER = /\{\{\s*baseurl\s*\}\}/g;


function urlStripper(destination) {
  return through.obj(write) 

  function write(file, enc, cb) {
    const contents = file.contents.toString();

    file.contents = new Buffer(contents.replace(MATCHER, getDestination(destination)));
    this.push(file);

    cb();
  }
};

function getDestination(destination) {
  return DESTINATIONS[destination] || '';
}

urlStripper.getDestination = getDestination;

export default urlStripper;

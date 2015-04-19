ATF-APK
=======

Building
--------

## Clone

Clone or download this repo.

```
git clone https://github.com/steelsojka/atf-apk.git
```

## Install Node dependencies

- Install [NodeJS](https://nodejs.org)
- Run `npm install -g gulp`
- Run `cd path/to/atf-apk`
- Run `npm install`

## Starting local server

You can start a local development server by running `gulp` from the project root.

## Building

You can build the project by running `gulp build --release`. This will generate
a zip file at `dist/atf-apk.zip`. This can be unzip to a hosting environment.

## Github Pages

If deploying to github pages you must include the `--destination github` option when running `gulp build --release`.

!function t(e,r,n){function i(u,c){if(!r[u]){if(!e[u]){var f="function"==typeof require&&require;if(!c&&f)return f(u,!0);if(o)return o(u,!0);var s=new Error("Cannot find module '"+u+"'");throw s.code="MODULE_NOT_FOUND",s}var a=r[u]={exports:{}};e[u][0].call(a.exports,function(t){var r=e[u][1][t];return i(r?r:t)},a,a.exports,t,e,r,n)}return r[u].exports}for(var o="function"==typeof require&&require,u=0;u<n.length;u++)i(n[u]);return i}({1:[function(t,e,r){"use strict";t("./twitter")},{"./twitter":2}],2:[function(t,e,r){"use strict";!function(t,e,r){var n,i=t.getElementsByTagName(e)[0],o=/^http:/.test(t.location)?"http":"https";t.getElementById(r)||(n=t.createElement(e),n.id=r,n.src=o+"://platform.twitter.com/widgets.js",i.parentNode.insertBefore(n,i))}(document,"script","twitter-wjs")},{}]},{},[1]);
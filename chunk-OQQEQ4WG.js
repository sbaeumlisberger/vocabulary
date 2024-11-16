// node_modules/@ionic/core/components/index6.js
var printIonWarning = (message, ...params) => {
  return console.warn(`[Ionic Warning]: ${message}`, ...params);
};
var printIonError = (message, ...params) => {
  return console.error(`[Ionic Error]: ${message}`, ...params);
};
var printRequiredElementError = (el, ...targetSelectors) => {
  return console.error(`<${el.tagName.toLowerCase()}> must be used inside ${targetSelectors.join(" or ")}.`);
};

export {
  printIonWarning,
  printIonError,
  printRequiredElementError
};
/*! Bundled license information:

@ionic/core/components/index6.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=chunk-OQQEQ4WG.js.map

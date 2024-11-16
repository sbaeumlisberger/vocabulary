import {
  printRequiredElementError
} from "./chunk-OQQEQ4WG.js";
import {
  componentOnReady
} from "./chunk-4WT7J3YM.js";
import {
  __async
} from "./chunk-UL2P3LPA.js";

// node_modules/@ionic/core/components/index8.js
var ION_CONTENT_TAG_NAME = "ION-CONTENT";
var ION_CONTENT_ELEMENT_SELECTOR = "ion-content";
var ION_CONTENT_CLASS_SELECTOR = ".ion-content-scroll-host";
var ION_CONTENT_SELECTOR = `${ION_CONTENT_ELEMENT_SELECTOR}, ${ION_CONTENT_CLASS_SELECTOR}`;
var isIonContent = (el) => el.tagName === ION_CONTENT_TAG_NAME;
var getScrollElement = (el) => __async(void 0, null, function* () {
  if (isIonContent(el)) {
    yield new Promise((resolve) => componentOnReady(el, resolve));
    return el.getScrollElement();
  }
  return el;
});
var findIonContent = (el) => {
  const customContentHost = el.querySelector(ION_CONTENT_CLASS_SELECTOR);
  if (customContentHost) {
    return customContentHost;
  }
  return el.querySelector(ION_CONTENT_SELECTOR);
};
var findClosestIonContent = (el) => {
  return el.closest(ION_CONTENT_SELECTOR);
};
var scrollToTop = (el, durationMs) => {
  if (isIonContent(el)) {
    const content = el;
    return content.scrollToTop(durationMs);
  }
  return Promise.resolve(el.scrollTo({
    top: 0,
    left: 0,
    behavior: durationMs > 0 ? "smooth" : "auto"
  }));
};
var scrollByPoint = (el, x, y, durationMs) => {
  if (isIonContent(el)) {
    const content = el;
    return content.scrollByPoint(x, y, durationMs);
  }
  return Promise.resolve(el.scrollBy({
    top: y,
    left: x,
    behavior: durationMs > 0 ? "smooth" : "auto"
  }));
};
var printIonContentErrorMsg = (el) => {
  return printRequiredElementError(el, ION_CONTENT_ELEMENT_SELECTOR);
};
var disableContentScrollY = (contentEl) => {
  if (isIonContent(contentEl)) {
    const ionContent = contentEl;
    const initialScrollY = ionContent.scrollY;
    ionContent.scrollY = false;
    return initialScrollY;
  } else {
    contentEl.style.setProperty("overflow", "hidden");
    return true;
  }
};
var resetContentScrollY = (contentEl, initialScrollY) => {
  if (isIonContent(contentEl)) {
    contentEl.scrollY = initialScrollY;
  } else {
    contentEl.style.removeProperty("overflow");
  }
};

export {
  ION_CONTENT_ELEMENT_SELECTOR,
  ION_CONTENT_CLASS_SELECTOR,
  isIonContent,
  getScrollElement,
  findIonContent,
  findClosestIonContent,
  scrollToTop,
  scrollByPoint,
  printIonContentErrorMsg,
  disableContentScrollY,
  resetContentScrollY
};
/*! Bundled license information:

@ionic/core/components/index8.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=chunk-AGXZWMF6.js.map

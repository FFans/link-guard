/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/forum/components/LinkGuardDestination.tsx"
/*!*******************************************************!*\
  !*** ./src/forum/components/LinkGuardDestination.tsx ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LinkGuardDestination)
/* harmony export */ });
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);


class LinkGuardDestination extends (flarum_common_Component__WEBPACK_IMPORTED_MODULE_0___default()) {
  view() {
    const {
      target
    } = this.attrs;
    return m("dl", {
      className: "LinkGuardPage-destination"
    }, m("dt", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('ffans-link-guard.forum.destination_label')), m("dd", {
      className: "LinkGuardPage-host",
      dir: "ltr"
    }, target.host), m("dd", {
      className: "LinkGuardPage-url",
      dir: "ltr"
    }, target.href));
  }
}
flarum.reg.add('ffans-link-guard', 'forum/components/LinkGuardDestination', LinkGuardDestination);

/***/ },

/***/ "./src/forum/components/LinkGuardModal.tsx"
/*!*************************************************!*\
  !*** ./src/forum/components/LinkGuardModal.tsx ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LinkGuardModal)
/* harmony export */ });
/* harmony import */ var flarum_common_components_Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/components/Icon */ "flarum/common/components/Icon");
/* harmony import */ var flarum_common_components_Icon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Icon__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_linkGuardUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/linkGuardUrl */ "./src/forum/utils/linkGuardUrl.ts");
/* harmony import */ var _utils_warningContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/warningContent */ "./src/forum/utils/warningContent.ts");





class LinkGuardModal extends (flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1___default()) {
  className() {
    return 'LinkGuardModal';
  }
  title() {
    return (0,_utils_linkGuardUrl__WEBPACK_IMPORTED_MODULE_3__.parseLinkGuardTarget)(this.attrs.targetHash) ? (0,_utils_warningContent__WEBPACK_IMPORTED_MODULE_4__["default"])().title : flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('ffans-link-guard.forum.invalid_title');
  }
  inner() {
    return m('[', null, m("div", {
      className: "LinkGuardModal-heading"
    }, m("span", {
      className: "LinkGuardModal-symbol",
      "aria-hidden": "true"
    }, m((flarum_common_components_Icon__WEBPACK_IMPORTED_MODULE_0___default()), {
      name: "fas fa-arrow-up-right-from-square"
    })), m("h3", null, this.title())), this.content());
  }
  content() {
    const target = (0,_utils_linkGuardUrl__WEBPACK_IMPORTED_MODULE_3__.parseLinkGuardTarget)(this.attrs.targetHash);
    return m("div", {
      className: "LinkGuardModal-body"
    }, m("p", {
      className: "LinkGuardModal-message"
    }, target ? (0,_utils_warningContent__WEBPACK_IMPORTED_MODULE_4__["default"])().message : flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('ffans-link-guard.forum.invalid_message')), target && m("dl", {
      className: "LinkGuardModal-destination"
    }, m("dt", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('ffans-link-guard.forum.destination_label')), m("dd", {
      className: "LinkGuardModal-host",
      dir: "ltr"
    }, target.host), m("dd", {
      className: "LinkGuardModal-url",
      dir: "ltr"
    }, target.href)), m("div", {
      className: "LinkGuardModal-actions"
    }, m("button", {
      className: "Button Button--outline",
      type: "button",
      onclick: () => this.hide()
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('ffans-link-guard.forum.cancel_button')), target && m("a", {
      className: "Button Button--primary",
      href: target.href,
      target: "_blank",
      rel: "nofollow noopener noreferrer external",
      "data-ffans-link-guard-bypass": "1",
      onclick: () => this.hide()
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('ffans-link-guard.forum.continue_button'))));
  }
}
flarum.reg.add('ffans-link-guard', 'forum/components/LinkGuardModal', LinkGuardModal);

/***/ },

/***/ "./src/forum/extend.ts"
/*!*****************************!*\
  !*** ./src/forum/extend.ts ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extenders */ "flarum/common/extenders");
/* harmony import */ var flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_LinkGuardPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/LinkGuardPage */ "./src/forum/pages/LinkGuardPage.tsx");



// oxfmt-ignore
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([new (flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0___default().Routes)().add('ffansLinkGuard', '/link-guard', _pages_LinkGuardPage__WEBPACK_IMPORTED_MODULE_1__["default"])]);

/***/ },

/***/ "./src/forum/extenders/protectExternalLinks.ts"
/*!*****************************************************!*\
  !*** ./src/forum/extenders/protectExternalLinks.ts ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ protectExternalLinks),
/* harmony export */   processAnchor: () => (/* binding */ processAnchor)
/* harmony export */ });
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/CommentPost */ "flarum/forum/components/CommentPost");
/* harmony import */ var flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_LinkGuardModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/LinkGuardModal */ "./src/forum/components/LinkGuardModal.tsx");
/* harmony import */ var _utils_linkGuardUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/linkGuardUrl */ "./src/forum/utils/linkGuardUrl.ts");
/* harmony import */ var _utils_trustedDomains__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/trustedDomains */ "./src/forum/utils/trustedDomains.ts");






function processAnchor(anchor, rules, route, useModal) {
  if (useModal === void 0) {
    useModal = false;
  }
  if (anchor.hasAttribute('data-ffans-link-guard-processed') || anchor.hasAttribute('data-ffans-link-guard-bypass')) return;
  try {
    const rawHref = anchor.getAttribute('href');
    if (!rawHref) return;
    const forumUrl = new URL(window.location.href);
    const target = new URL(rawHref, forumUrl);
    if (!(0,_utils_linkGuardUrl__WEBPACK_IMPORTED_MODULE_4__.shouldProtectUrl)(target, forumUrl, rules)) return;
    anchor.setAttribute('href', (0,_utils_linkGuardUrl__WEBPACK_IMPORTED_MODULE_4__.buildLinkGuardUrl)(route, target));
    anchor.setAttribute('target', '_blank');
    anchor.relList.add('noopener');
    anchor.setAttribute('data-ffans-link-guard-processed', '1');
    if (useModal) {
      anchor.addEventListener('click', event => {
        if (event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        void flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().modal.show(_components_LinkGuardModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
          targetHash: anchor.hash
        });
      });
    }
  } catch {
    // A malformed link must not prevent this post's remaining links from working.
  }
}
function protectExternalLinks() {
  let rules;
  let useModal;
  function protectPostLinks() {
    // Initializers run before app.forum is assigned in Flarum 2.
    rules ??= (0,_utils_trustedDomains__WEBPACK_IMPORTED_MODULE_5__.parseTrustedDomains)(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('linkGuardTrustedDomains') || '');
    useModal ??= flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('linkGuardUseModal') === true;
    const route = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().route('ffansLinkGuard');
    this.element.querySelectorAll('.Post-body a[href]').forEach(anchor => {
      processAnchor(anchor, rules, route, useModal);
    });
  }
  ;(0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'oncreate', protectPostLinks);
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'onupdate', protectPostLinks);
}
flarum.reg.add('ffans-link-guard', 'forum/extenders/protectExternalLinks', protectExternalLinks);

/***/ },

/***/ "./src/forum/index.ts"
/*!****************************!*\
  !*** ./src/forum/index.ts ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extend: () => (/* reexport safe */ _extend__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _extenders_protectExternalLinks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extenders/protectExternalLinks */ "./src/forum/extenders/protectExternalLinks.ts");
/* harmony import */ var _extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extend */ "./src/forum/extend.ts");



flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('ffans-link-guard', () => {
  (0,_extenders_protectExternalLinks__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

/***/ },

/***/ "./src/forum/pages/LinkGuardPage.tsx"
/*!*******************************************!*\
  !*** ./src/forum/pages/LinkGuardPage.tsx ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LinkGuardPage)
/* harmony export */ });
/* harmony import */ var flarum_common_components_Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/components/Icon */ "flarum/common/components/Icon");
/* harmony import */ var flarum_common_components_Icon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Icon__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Page */ "flarum/common/components/Page");
/* harmony import */ var flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_LinkGuardDestination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/LinkGuardDestination */ "./src/forum/components/LinkGuardDestination.tsx");
/* harmony import */ var _utils_linkGuardUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/linkGuardUrl */ "./src/forum/utils/linkGuardUrl.ts");
/* harmony import */ var _utils_warningContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/warningContent */ "./src/forum/utils/warningContent.ts");






class LinkGuardPage extends (flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1___default()) {
  bodyClass = 'App--linkGuard';
  target = null;
  targetHash = '';
  closeRequested = false;
  oninit(vnode) {
    super.oninit(vnode);
    this.readTarget();
  }
  oncreate(vnode) {
    super.oncreate(vnode);
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().setTitle(flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('ffans-link-guard.forum.page_title', {}, true));
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().setTitleCount(0);
    window.addEventListener('hashchange', this.onHashChange);
  }
  onremove(vnode) {
    window.removeEventListener('hashchange', this.onHashChange);
    super.onremove(vnode);
  }
  onHashChange = () => {
    this.readTarget();
    m.redraw();
  };
  readTarget() {
    this.targetHash = window.location.hash;
    this.target = (0,_utils_linkGuardUrl__WEBPACK_IMPORTED_MODULE_4__.parseLinkGuardTarget)(this.targetHash);
  }
  view() {
    // A route redraw can reuse the Page before the hashchange event is dispatched.
    if (this.targetHash !== window.location.hash) this.readTarget();
    const {
      forumName,
      title,
      message
    } = (0,_utils_warningContent__WEBPACK_IMPORTED_MODULE_5__["default"])();
    const logoUrl = flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().forum.attribute('logoUrl');
    const darkLogoUrl = flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().forum.attribute('logoDarkModeUrl');
    return m("div", {
      className: "LinkGuardPage"
    }, m("div", {
      className: "LinkGuardPage-content"
    }, m("div", {
      className: "LinkGuardPage-brand"
    }, logoUrl ? m('[', null, m("img", {
      className: "Header-logo",
      src: logoUrl,
      alt: forumName
    }), darkLogoUrl && m("img", {
      className: "Header-logo Header-logo--dark-mode",
      src: darkLogoUrl,
      alt: forumName
    })) : forumName), m("section", {
      className: `LinkGuardPage-notice${this.target ? '' : ' LinkGuardPage-invalid'}`,
      "aria-labelledby": "LinkGuardPage-title"
    }, m("h1", {
      id: "LinkGuardPage-title"
    }, this.target ? title : flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('ffans-link-guard.forum.invalid_title')), m("p", {
      className: "LinkGuardPage-message"
    }, this.target ? message : flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('ffans-link-guard.forum.invalid_message')), this.target && m(_components_LinkGuardDestination__WEBPACK_IMPORTED_MODULE_3__["default"], {
      target: this.target
    }), m("div", {
      className: "LinkGuardPage-actions"
    }, m("button", {
      className: "Button Button--outline",
      type: "button",
      onclick: () => {
        this.closeRequested = true;
        window.close();
      }
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('ffans-link-guard.forum.close_button')), this.target && m("a", {
      className: "Button Button--primary",
      href: this.target.href,
      target: "_self",
      rel: "nofollow noopener noreferrer external",
      "data-ffans-link-guard-bypass": "1"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('ffans-link-guard.forum.continue_button'), m((flarum_common_components_Icon__WEBPACK_IMPORTED_MODULE_0___default()), {
      name: "fas fa-arrow-up-right-from-square"
    }))), this.closeRequested && m("p", {
      role: "status",
      className: "LinkGuardPage-footer"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('ffans-link-guard.forum.close_fallback', {
      a: _ref => {
        let {
          children
        } = _ref;
        return m("a", {
          href: this.backUrl()
        }, children);
      }
    })))));
  }
  backUrl() {
    try {
      const referrer = new URL(document.referrer);
      if (referrer.origin === new URL(flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().forum.attribute('baseUrl')).origin) return referrer.href;
    } catch {
      // Missing or malformed referrers use the configured forum homepage.
    }
    return flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().route('index');
  }
}
flarum.reg.add('ffans-link-guard', 'forum/pages/LinkGuardPage', LinkGuardPage);

/***/ },

/***/ "./src/forum/utils/linkGuardUrl.ts"
/*!*****************************************!*\
  !*** ./src/forum/utils/linkGuardUrl.ts ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildLinkGuardUrl: () => (/* binding */ buildLinkGuardUrl),
/* harmony export */   isHttpUrl: () => (/* binding */ isHttpUrl),
/* harmony export */   isSameOrigin: () => (/* binding */ isSameOrigin),
/* harmony export */   parseLinkGuardTarget: () => (/* binding */ parseLinkGuardTarget),
/* harmony export */   shouldProtectUrl: () => (/* binding */ shouldProtectUrl)
/* harmony export */ });
/* harmony import */ var _trustedDomains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trustedDomains */ "./src/forum/utils/trustedDomains.ts");

function isHttpUrl(url) {
  return url.protocol === 'http:' || url.protocol === 'https:';
}
function isSameOrigin(url, forumUrl) {
  return url.origin === forumUrl.origin;
}
function shouldProtectUrl(url, forumUrl, rules) {
  return isHttpUrl(url) && !isSameOrigin(url, forumUrl) && !(0,_trustedDomains__WEBPACK_IMPORTED_MODULE_0__.isTrustedHostname)(url.hostname, rules);
}
function buildLinkGuardUrl(baseRoute, target) {
  return `${baseRoute}#${new URLSearchParams({
    url: target.href
  })}`;
}
function parseLinkGuardTarget(hash) {
  const target = new URLSearchParams(hash.replace(/^#/, '')).get('url');
  if (!target) return null;
  try {
    const url = new URL(target);
    return isHttpUrl(url) ? url : null;
  } catch {
    return null;
  }
}
flarum.reg.add('ffans-link-guard', 'forum/utils/linkGuardUrl', { isHttpUrl: isHttpUrl,isSameOrigin: isSameOrigin,shouldProtectUrl: shouldProtectUrl,buildLinkGuardUrl: buildLinkGuardUrl,parseLinkGuardTarget: parseLinkGuardTarget, });

/***/ },

/***/ "./src/forum/utils/trustedDomains.ts"
/*!*******************************************!*\
  !*** ./src/forum/utils/trustedDomains.ts ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isTrustedHostname: () => (/* binding */ isTrustedHostname),
/* harmony export */   parseTrustedDomains: () => (/* binding */ parseTrustedDomains)
/* harmony export */ });
function normalizeHostname(hostname) {
  // A rule is a hostname, never a URL, port, credential, or encoded separator.
  if (!hostname || /[\s/:?#@\\*%]/u.test(hostname)) return null;
  try {
    const normalized = new URL(`https://${hostname}`).hostname.toLowerCase().replace(/\.$/, '');
    if (!normalized || normalized.split('.').some(label => !label || !/^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(label))) {
      return null;
    }
    return normalized;
  } catch {
    return null;
  }
}
function parseTrustedDomains(raw) {
  const rules = [];
  for (const line of raw.split(/\r?\n/)) {
    const rule = line.trim();
    const subdomain = rule.startsWith('*.');
    const hostname = normalizeHostname(subdomain ? rule.slice(2) : rule);
    if (hostname) rules.push({
      type: subdomain ? 'subdomain' : 'exact',
      hostname
    });
  }
  return rules;
}
function isTrustedHostname(hostname, rules) {
  const normalized = normalizeHostname(hostname);
  if (!normalized) return false;
  return rules.some(rule => rule.type === 'exact' ? normalized === rule.hostname : normalized !== rule.hostname && normalized.endsWith(`.${rule.hostname}`));
}
flarum.reg.add('ffans-link-guard', 'forum/utils/trustedDomains', { parseTrustedDomains: parseTrustedDomains,isTrustedHostname: isTrustedHostname, });

/***/ },

/***/ "./src/forum/utils/warningContent.ts"
/*!*******************************************!*\
  !*** ./src/forum/utils/warningContent.ts ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ warningContent)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);

function warningContent() {
  const forumName = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('title') || flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('ffans-link-guard.lib.default_forum_name', {}, true);
  const customTitle = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('linkGuardWarningTitle') || '';
  const customMessage = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('linkGuardWarningMessage') || '';
  return {
    forumName,
    title: customTitle.trim() ? customTitle : flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('ffans-link-guard.lib.default_warning_title', {
      forumName
    }, true),
    message: customMessage.trim() ? customMessage : flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('ffans-link-guard.lib.default_warning_message', {}, true)
  };
}
flarum.reg.add('ffans-link-guard', 'forum/utils/warningContent', warningContent);

/***/ },

/***/ "flarum/common/Component"
/*!*************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/Component')" ***!
  \*************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/Component');

/***/ },

/***/ "flarum/common/components/Icon"
/*!*******************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/Icon')" ***!
  \*******************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/components/Icon');

/***/ },

/***/ "flarum/common/components/Modal"
/*!********************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/Modal')" ***!
  \********************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/components/Modal');

/***/ },

/***/ "flarum/common/components/Page"
/*!*******************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/Page')" ***!
  \*******************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/components/Page');

/***/ },

/***/ "flarum/common/extend"
/*!**********************************************************!*\
  !*** external "flarum.reg.get('core', 'common/extend')" ***!
  \**********************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/extend');

/***/ },

/***/ "flarum/common/extenders"
/*!*************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/extenders')" ***!
  \*************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/extenders');

/***/ },

/***/ "flarum/forum/app"
/*!******************************************************!*\
  !*** external "flarum.reg.get('core', 'forum/app')" ***!
  \******************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'forum/app');

/***/ },

/***/ "flarum/forum/components/CommentPost"
/*!*************************************************************************!*\
  !*** external "flarum.reg.get('core', 'forum/components/CommentPost')" ***!
  \*************************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'forum/components/CommentPost');

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		flarum.reg._webpack_runtimes["ffans-link-guard"] ||= __webpack_require__;// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./forum.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extend: () => (/* reexport safe */ _src_forum__WEBPACK_IMPORTED_MODULE_0__.extend)
/* harmony export */ });
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.ts");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map
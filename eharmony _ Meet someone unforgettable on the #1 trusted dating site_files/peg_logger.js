/*! 2020-10-27 16:10:32*/

"use strict";var _slicedToArray=function(){function a(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!b||c.length!==b);d=!0);}catch(a){e=!0,f=a}finally{try{!d&&h.return&&h.return()}finally{if(e)throw f}}return c}return function(b,c){if(Array.isArray(b))return b;if(Symbol.iterator in Object(b))return a(b,c);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};!function(a){a.util={preparedJsonString:function(a){return JSON.stringify(a)},getUserAgent:function(){return navigator.userAgent},getPathName:function(){return window.location.pathname},getHostname:function(){return window.location.hostname},getChiffre:function(){var a=document.getElementById("domPageVars"),b=null;return null!==a&&null!==a.getAttribute("data-user-id")&&(b=a.getAttribute("data-user-id")),b},getGuid:function(){try{var a=window.navigator,b=window.screen,c=a.mimeTypes.length;return c+=a.userAgent.replace(/\D+/g,""),c+=a.plugins.length,c+=b.height||"",c+=b.width||"",c+=b.pixelDepth||"",c+=encodeURIComponent(window.btoa(this.getHostname()))}catch(a){return"couldNMotGenerateGuid"+a}},getChiffreOrGuid:function(){var a=this.getChiffre();return null===a&&(a=this.getGuid()),a},getBrandId:function(){var a="";return window.location.hostname.indexOf("parship")>-1?a="ps":window.location.hostname.indexOf("eharmony")>-1?a="eh":window.location.hostname.indexOf("elitepartner")>-1&&(a="ep"),a},getTimeStamp:function(){return(new Date).getTime()},getCustomerJourneyId:function(){return this.getCookie("cjcookie")},getCookie:function(a){if(!document.cookie)return null;for(var b=document.cookie,c=b.split(";"),d=0;d<c.length;d++){var e=c[d],f=e.split("=",2);if(f[0].trim()===a)return f[1]}return null},isDevSystem:function(){var a=location.hostname;return!1==a.indexOf(".ehprod.")>-1&&(a.indexOf(".dev")>-1||a.indexOf(".internal")>-1||a.indexOf(".office")>-1||a.indexOf("localhost")>-1)},devConsole:function(a){!0===this.isDevSystem()&&console.log(a)},getQaTestModeFor:function(a){var b=this.getCookie("qaTestMode");return null!==b&&b.indexOf(a)>-1},getCurrentScreenSize:function(){var a=window.innerWidth,b=void 0;try{b=window.getComputedStyle(document.body,":after").getPropertyValue("content"),b=b.replace(/"/g,"").replace(/'/g,"")}catch(a){b="XL"}return"S"!==b&&"M"!==b&&"L"!==b&&"XL"!==b&&(b=a>=0&&a<481?"S":a>=481&&a<768?"M":a>=768&&a<980?"L":"XL"),b},getTimezone:function(){try{if("Intl"in window){return"string"==typeof Intl.DateTimeFormat().resolvedOptions().timeZone?Intl.DateTimeFormat().resolvedOptions().timeZone:""}return""}catch(a){return""}},customEvent:{trigger:function(a,b){this._polyfillCustomEvent();var c=new CustomEvent(a,{detail:b});document.dispatchEvent(c)},_polyfillCustomEvent:function(){!function(){function a(a,b){b=b||{bubbles:!1,cancelable:!1,detail:void 0};var c=document.createEvent("CustomEvent");return c.initCustomEvent(a,b.bubbles,b.cancelable,b.detail),c}if("CustomEvent"in window&&"function"==typeof window.CustomEvent)return!1;a.prototype=window.Event.prototype,window.CustomEvent=a}()}}}}(window.pegLogger=window.pegLogger||{}),function(a){function b(a){!function(a,b,c,d,e,f,g){a.InstanaEumObject=e,a[e]=a[e]||function(){(a[e].q=a[e].q||[]).push(arguments)},a[e].l=1*new Date,f=b.createElement(c),g=b.getElementsByTagName(c)[0],f.async=1,f.src=d,g.parentNode.insertBefore(f,g)}(window,document,"script",a,"ineum")}function c(){ineum("reportingUrl","https://eum-eu-west-1.instana.io")}function d(){try{var a=document.querySelector("meta[name=_ibtid]").getAttribute("content");null!==a&&ineum("traceId",a)}catch(a){}}function e(){var b="";a.util.isDevSystem()?b="3QqON4bzShmMdfJUWCKXwg":"ps"===a.util.getBrandId()?b="J_6i8IVCSV-6IC4dKfe6NA":"ep"===a.util.getBrandId()?b="uzIBlQLNTOu7WgZRakZ9iA":"eh"===a.util.getBrandId()&&(b="VDyLMwT6QW2j93YpxKH-wA"),ineum("apiKey",b)}function f(){var a=document.querySelector("body").getAttribute("id");null!==a&&ineum("page",a)}function g(){ineum("meta","user-agent",a.util.getUserAgent())}function h(){var b=a.util.getChiffre();null!==b&&ineum("meta","chiffre",b)}!function(){try{!1===a.util.isDevSystem()&&(b("https://eum.instana.io/eum.min.js"),c(),d(),e(),f(),g(),h())}catch(b){a.util.devConsole("Instana script not initialized"),a.util.devConsole(b)}}()}(window.pegLogger=window.pegLogger||{}),function(a){function b(b){var d=(new Date).getTime(),f=new XMLHttpRequest;f.open("POST","/ls/?"+d,!0),f.setRequestHeader("Content-Type","application/json;charset=UTF-8"),f.setRequestHeader("X-Requested-With","XMLHttpsRequest");var g={userAgent:a.util.getUserAgent(),breakpoint:a.util.getCurrentScreenSize(),domain:a.util.getHostname(),pathName:a.util.getPathName(),chiffre:a.util.getChiffreOrGuid(),message:c(b.message),stacktrace:b.stacktrace,origin:b.origin,loggingType:"JsError"};if(e<10){var h=!0;void 0!==b.stacktrace&&((b.stacktrace.indexOf("innerText")>-1||b.stacktrace.indexOf("invalid content returned for slot")>-1)&&(h=!1),b.stacktrace.indexOf("Cannot read property")>-1&&b.stacktrace.indexOf("defaultView")>-1&&b.stacktrace.indexOf("external_navi_combined.js")>-1&&(h=!1),(b.stacktrace.indexOf("QuotaExceededError")>-1||b.stacktrace.indexOf("wdkmodalbox: Session expired")>-1||b.stacktrace.indexOf("document.getElementsByClassName.ToString")>-1||b.stacktrace.indexOf("TypeError: d is not a function")>-1||b.stacktrace.indexOf("e.targetTouches[0].pageX")>-1)&&(h=!1),b.stacktrace.indexOf("https://www.googletagmanager.com/gtag/js")>-1&&(h=!1),(b.stacktrace.indexOf("https://connect.facebook.net/en_US/fbevents.js")>-1||b.stacktrace.indexOf("https://googleads.g.doubleclick.net")>-1||b.stacktrace.indexOf("www.googleadservices.com")>-1||b.stacktrace.indexOf("moz-extension://")>-1||b.stacktrace.indexOf("https://bat.bing.com")>-1||b.stacktrace.indexOf("www.dwin1.com")>-1||b.stacktrace.indexOf('Die Eigenschaft "message" eines undefinierten oder Nullverweises kann nicht abgerufen werden')>-1||a.util.getUserAgent().indexOf("Trident/7.0")>-1)&&(h=!1),b.stacktrace.indexOf("Object expected")>-1&&b.userAgent.indexOf("Edge/")>-1&&(h=!1),b.stacktrace.indexOf("pegAgora is not defined")>-1&&(h=!1),b.stacktrace.indexOf("Caught_2")>-1&&void 0!==b.message&&(b.message.indexOf("TypeError: Cannot read property")>-1&&b.message.indexOf("top")>-1||b.message.indexOf("isLoadNextContactsNeeded")>-1||b.message.indexOf(!1)||b.message.indexOf("The media resource indicated by the src attribute or assigned media provider")>-1||b.message.indexOf("play")>-1)&&(h=!1),b.stacktrace.indexOf("Caught_2")>-1&&void 0!==b.message&&(b.message.indexOf("TimeoutError")>-1||b.message.indexOf("Failed to fetch")>-1||b.message.indexOf("construct@[native code]")>-1)&&(h=!1)),(a.util.getPathName().indexOf("/v19/homepage_for_monitoring.html")>-1||a.util.getPathName().indexOf("htlp")>-1||a.util.getPathName().indexOf("aff_c")>-1)&&(h=!1),h&&(f.send(a.util.preparedJsonString(g)),e+=1)}void 0!==b.stacktrace?a.util.devConsole("peg_logger: "+a.util.preparedJsonString(b.stacktrace)):a.util.devConsole("peg_logger send")}function c(a){return"object"===(void 0===a?"undefined":_typeof(a))?JSON.stringify(a):a}function d(){var c=function(a){var b=window.document.createElement("a");return b.href=a,b};window.onerror=function(d,e,f,g,h){try{var i="",j=!1,k=!1,l="No Stacktrace from Browser";if(void 0!==e&&(i=c(e).hostname,j=i===window.location.hostname,k=e.indexOf("_combined.js")>0||e.indexOf("sso_lib.js")>0),void 0===g&&(g=""),void 0!==d&&null!==d||(d=""),void 0===h&&(h=""),void 0!==h.stack&&(l=h.stack),d.indexOf("Script error.")>-1)return;j&&k?b({stacktrace:d+" UNCAUGHT ERROR: in "+e+" LINE: "+f+" column: "+g+" errorObj: "+h,origin:"Uncaught_pegJSError",message:l}):e===window.location.href||b(""===e?{stacktrace:d+" UNCAUGHT ERROR: in "+e+" LINE: "+f+" errorObj: "+h,origin:"Uncaught_externalJSerror",message:l}:{stacktrace:d+" UNCAUGHT ERROR: in "+e+" LINE: "+f+" errorObj: "+h,origin:"Uncaught_unknownSrcJSerror",message:l})}catch(b){a.util.devConsole("window.onerror failed in jserror_logger: "+b)}}}!function(){d(),document.addEventListener("pegLogger-logJsError",function(a){b(a.detail)})}();var e=0}(window.pegLogger=window.pegLogger||{}),function(a){function b(){try{var b={};if(void 0!==performance.getEntriesByType("paint")[1]){var c=Math.round(performance.getEntriesByType("paint")[1].startTime);c>0&&c<6e4&&(b=Object.assign({pegPageLookingGood:c},b))}if(void 0!==performance.timing){var d=Math.round(performance.timing.domContentLoadedEventEnd-performance.timing.navigationStart);d>0&&d<6e4&&(b=Object.assign({pegPageUsable:d},b))}return b}catch(b){a.util.customEvent.trigger("pegLogger-logJsError",{message:"Performance Logger Error: _getPerformanceValues",stacktrace:b.toString(),origin:"Caught_JsError"})}}function c(){var a="";if(document.getElementById("domPageVars")){var b=document.getElementById("domPageVars");b.hasAttribute("data-page-name")?a="Homepage":b.hasAttribute("data-user-id")?b.hasAttribute("data-user-id")&&(a=null!==document.getElementById("footerUnified")&&e(document.getElementById("footerUnified"),"registrationLayout")?"webAppQuestionnaire":e(document.getElementsByTagName("body")[0],"paymentPages")?"webAppPayment":"webAppLoggedIn"):a=null!==document.getElementById("footer-nav")?"epMagazin":null!==document.getElementById("ps_onEditorial")?"psOldEditorial":null!==document.getElementById("loginPage")||null!==document.getElementById("registrationPage")?"webAppLoginAndRegistrationPage":"webAppLoggedOut"}else a=null!==document.getElementById("staticLandingpage")?"staticLandingpage":null!==document.getElementById("footer-nav")?"epForum":null!==document.getElementById("landingpage2014")?"psLpGenerator":"otherArea";return a}function d(b){try{var d=c();Object.entries(b).forEach(function(a){var b=_slicedToArray(a,2),c=b[0],e=b[1],f=encodeURI(d.replace(/[%'();]/g,"")),g=encodeURI(c.replace(/[%'();]/g,""));"undefined"!=typeof _tms&&"undefined"!=typeof ga?_tms.send([["_trackTiming",f,g,e]]):"undefined"!=typeof _tms&&"undefined"!=typeof ga&&setTimeout(function(){_tms.send([["_trackTiming",f,g,e]])},2e3)})}catch(b){a.util.customEvent.trigger("pegLogger-logJsError",{message:"Performance Logger Error: _sendPerformance",stacktrace:b.toString(),origin:"Caught_JsError"})}}function e(a,b){return a.className&&new RegExp("(\\s|^)"+b+"(\\s|$)").test(a.className)}!function(){try{window.addEventListener("load",function(){var a="object"===("undefined"==typeof Event?"undefined":_typeof(Event));"undefined"==typeof performance||void 0===performance.timing||void 0===performance.getEntriesByType||void 0===performance.getEntriesByType("paint")[1]||a||d(b())})}catch(b){a.util.customEvent.trigger("pegLogger-logJsError",{message:"Performance Logger Error: init",stacktrace:b.toString(),origin:"Caught_JsError"})}}()}(window.pegLogger=window.pegLogger||{}),function(a){function b(){try{!function(a){window.alert=function(b){return c({message:"alert called",stacktrace:"UrlParams:"+encodeURI(document.location.search)+" - param: "+encodeURI(b),origin:"Caught_jsXception"}),a.apply(this,arguments)}}(window.alert)}catch(a){}}function c(b){var c=!0,e=(new Date).getTime(),f=new XMLHttpRequest;f.open("POST","/ls/?"+e,!0),f.setRequestHeader("Content-Type","application/json;charset=UTF-8"),f.setRequestHeader("X-Requested-With","XMLHttpsRequest");var g={userAgent:a.util.getUserAgent(),breakpoint:a.util.getCurrentScreenSize(),domain:a.util.getHostname(),pathName:a.util.getPathName(),chiffre:a.util.getChiffreOrGuid(),message:b.message,stacktrace:b.stacktrace,origin:b.origin,loggingType:"JsError"};void 0!==b.stacktrace&&(b.stacktrace.indexOf("Cannot%20contact%20reCAPTCHA.%20Check%20your%20connection%20and%20try%20again")>-1||b.stacktrace.indexOf("Please%20switch%20tabs%20to%20reactivate%20the%20PayPal%20window")>-1)&&(c=!1),c&&d<50&&(f.send(a.util.preparedJsonString(g)),d+=1,void 0!==b.stacktrace?a.util.devConsole("peg_logger: "+a.util.preparedJsonString(b.stacktrace)):a.util.devConsole("peg_logger send"))}var d=0;!function(){b()}()}(window.pegLogger=window.pegLogger||{}),function(a){function b(b){if(c(b)){var e=a.util.getTimeStamp(),f="/bd/?"+e,g={brand:a.util.getBrandId(),chiffre:a.util.getChiffre(),category:b.category,subcategory:b.subcategory,target_id:b.targetId,action:b.action,cj_id:a.util.getCustomerJourneyId(),domain:a.util.getHostname(),path_name:a.util.getPathName(),user_agent:a.util.getUserAgent(),display_size:a.util.getCurrentScreenSize(),timezone:a.util.getTimezone()};if(d<100){if(navigator&&navigator.sendBeacon)navigator.sendBeacon(f,a.util.preparedJsonString(g));else{var h=new XMLHttpRequest;h.open("POST",f,!0),h.setRequestHeader("Content-Type","text/plain"),h.onreadystatechange=function(){h.readyState===XMLHttpRequest.DONE&&a.util.customEvent.trigger("sherLogger-xhrDone")},h.send(a.util.preparedJsonString(g))}d+=1}}else a.util.customEvent.trigger("pegLogger-logJsError",{message:"pegLogger.sherLogger._logEvent",stacktrace:"invalid eventData",origin:"Caught_JSError"})}function c(a){return a.category&&""!==a.category&&a.action&&""!==a.action}!function(){document.addEventListener("pegLogger-trackingPermission",function(a){b(a.detail)}),document.addEventListener("pegLogger-logTmsEvents",function(a){b(a.detail)}),document.addEventListener("pegLogger-logWebAppEvents",function(a){b(a.detail)})}();var d=0}(window.pegLogger=window.pegLogger||{});
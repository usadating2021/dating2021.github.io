/*! 2021-01-08 14:01:11*/

"use strict";function _typeof(a){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a})(a)}var pegExternalModifier={};pegExternalModifier=pegExternalModifier||{},pegExternalModifier.util={_addClass:function(a,b){var c=null!==a.getAttribute("class")?a.getAttribute("class"):"";a.setAttribute("class",c+" "+b)},_removeClass:function(a,b){var c=a.getAttribute("class").split(" "),d=c.indexOf(b);d>-1&&delete c[d],a.setAttribute("class",c.join(" "))},_polyfillCustomEvent:function(){var a=!1;"CustomEvent"in window&&("function"==typeof window.CustomEvent||window.CustomEvent.toString().indexOf("CustomEventConstructor")>-1)||(a=!0),a&&function(){window.CustomEvent=function(a,b){var c;if(b=b||{bubbles:!1,cancelable:!1,detail:null},"createEvent"in document)try{c=document.createEvent("CustomEvent"),c.initCustomEvent(a,b.bubbles,b.cancelable,b.detail)}catch(d){c=document.createEvent("Event"),c.initEvent(a,b.bubbles,b.cancelable),c.detail=b.detail}else c=new Event(a,b),c.detail=b&&b.detail||null;return c},CustomEvent.prototype=Event.prototype}()},_triggerCustomEvent:function(a,b){this._polyfillCustomEvent();var c=new CustomEvent(a,{detail:b});document.dispatchEvent(c)},isDevSystem:function(){var a=location.hostname;return a.indexOf(".parship.dev")>-1||a.indexOf(".internal")>-1||a.indexOf(".office")>-1||a.indexOf("localhost")>-1}},pegExternalModifier=pegExternalModifier||{},pegExternalModifier.dynamicConfigProvider={load:function(a){if(this.isOpenCmsDevSystem())this.createDummyConfObject(),void 0!==a&&a();else if("object"===("undefined"==typeof dynamicConf?"undefined":_typeof(dynamicConf)))void 0!==a&&a();else{var b="";null!==document.querySelector("div.config")&&null!==document.querySelector("div.config").getAttribute("data-tid")&&(b="?tid="+document.querySelector("div.config").getAttribute("data-tid"));var c=document.createElement("script");c.setAttribute("src","/common/dynamicconf"+b),document.getElementsByTagName("head")[0].appendChild(c),c.onloadDone||void 0===a||(c.onloadDone=!0,c.onload=function(){a()})}},isOpenCmsDevSystem:function(){var a=-1===window.location.hostname.indexOf("parship.dev")&&window.location.port>8e3,b=window.location.hostname.indexOf("opencms10.parship.internal")>-1,c=window.location.hostname.indexOf("localhost:")>-1;if(a||b||c)return!0},createDummyConfObject:function(){window.dynamicConf={ownerId:"1",ownerUrl:"https://www.parship.de.integ-preview.parship.dev",brandName:"parship",facebook:{appId:"1086603851444232",isLoginAllowed:!0,isRegistrationAllowed:!0,version:"v2.9",locale:"de_DE",infoModal:{headline:"Facebook Login",content:'Wenn Sie sich mit facebook einloggen bzw. anmelden, benötigen Sie kein gesondertes Passwort für Parship. Ihr Parship-Profil ist dann an ihre Anmeldedaten bei facebook gekoppelt. D.h. Sie verwenden ihr facebook Passwort auch für die Anmeldung bei Parship. Die erneute Eingabe Ihres Passwortes ist in diesem Verfahren nur dann erforderlich, wenn Sie nicht bereits bei facebook eingeloggt sind. In diesem Zusammenhang gehen wir davon aus, dass nur Sie allein Zugriff auf Ihr facebook-Konto haben. Sofern Sie bei facebook die Funktion nutzen, dass ihre Login-Daten bei jedem Aufruf der Webseite automatisch eingetragen werden, haben fremde Personen die Möglichkeit, auch Zugriff auf ihr Parship-Profil zu erlangen. <a href="#">Datenschutz</a>'}},apple:{clientId:"dev.parship.integ-preview",isLoginAllowed:!0,isRegistrationAllowed:!1,version:"1",locale:"de_DE",callbackDomain:"https://www.parship.de.integ-preview.parship.dev"},orientationPermission:{isEnabled:!0,checkboxText:'Ich bin einverstanden, das <a href="/test" target="_blank">Parship</a> für den Service der Partnersuche meine Angaben zum gesuchten Geschlecht verarbeitet. Diese Einwilligung kann ich jederzeit widerrufen, wodurch aber die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung nicht berührt wird.'},cookiebanner:{bannerText:"I consent to all Cookies",okButtonText:"OK",noButtonText:"NO"}},console.log("%cssoLib: loaded createDummyConfObject for openCmsDevSystem","color: blue; font-size: 20px;")}},pegExternalModifier=pegExternalModifier||{},pegExternalModifier.orientationPermission={init:function(){pegExternalModifier.dynamicConfigProvider.load(function(){"object"===_typeof(dynamicConf.orientationPermission)?pegExternalModifier.util._triggerCustomEvent("orientationPermission-status",{isEnabled:dynamicConf.orientationPermission.isEnabled,checkboxText:dynamicConf.orientationPermission.checkboxText}):pegExternalModifier.util._triggerCustomEvent("pegLogger-logJsError",{message:"orientationPermission",stacktrace:"dynamicConf.orientationPermission Object not defined",origin:"Caught_JsError"})})}};var socialSignOnLib={init:function(){try{var a=this;pegExternalModifier.dynamicConfigProvider.load(function(){if("undefined"!=typeof dynamicConf){a.apple.config.regActive=void 0!==dynamicConf.apple&&dynamicConf.apple.isRegistrationAllowed&&null!==document.querySelector("#appleRegContainer"),a.facebook.config.regActive=void 0!==dynamicConf.facebook&&dynamicConf.facebook.isRegistrationAllowed&&null!==document.querySelector("#facebookRegContainer"),a.apple.config.loginActive=void 0!==dynamicConf.apple&&dynamicConf.apple.isLoginAllowed&&null!==document.querySelector("#appleLoginContainer"),a.facebook.config.loginActive=void 0!==dynamicConf.facebook&&dynamicConf.facebook.isLoginAllowed&&null!==document.querySelector("#facebookLoginContainer");socialSignOnLib.apple.config.regActive||socialSignOnLib.apple.config.loginActive?a.secondButton._rebuildDom():(a.facebook._init(),a.apple._init())}else pegExternalModifier.util._triggerCustomEvent("pegLogger-logJsError",{message:"socialSignOnLib: dynamicConf could not be loaded correct",origin:"Caught_JsError"})})}catch(a){pegExternalModifier.util._triggerCustomEvent("pegLogger-logJsError",{message:"DynamicConfigProvider Error",stacktrace:a.message,origin:"Caught_JsError"})}},secondButton:{_rebuildDom:function(){document.getElementsByTagName("html")[0].classList.add("ssoSecondButton"),this._createWrapper(),this._createSeparator(),socialSignOnLib.facebook._init(),socialSignOnLib.apple._init(),this._moveButtons(),this._moveErrors()},_createWrapper:function(){var a=document.createElement("div");if(a.setAttribute("class","thirdPartyAuth"),socialSignOnLib.facebook.config.loginActive&&socialSignOnLib.apple.config.loginActive){var b=a.cloneNode(!0);b.setAttribute("id","ssoLogin"),document.querySelector("#facebookLoginContainer").parentNode.insertBefore(b,document.querySelector("#facebookLoginContainer"))}if(socialSignOnLib.facebook.config.regActive&&socialSignOnLib.apple.config.regActive){var c=a.cloneNode(!0);c.setAttribute("id","ssoReg"),document.querySelector("#facebookRegContainer").parentNode.insertBefore(c,document.querySelector("#facebookRegContainer"))}},_createSeparator:function(){var a=document.createElement("div");if(a.setAttribute("class","socialSignOnSeparator"),socialSignOnLib.facebook.config.loginActive&&socialSignOnLib.apple.config.loginActive){var b=a.cloneNode(!0),c=document.querySelector("#facebookLoginContainer .speratorText");null!==c&&(b.appendChild(c),document.querySelector("#ssoLogin.thirdPartyAuth").appendChild(b))}if(socialSignOnLib.facebook.config.regActive&&socialSignOnLib.apple.config.regActive){var d=a.cloneNode(!0),e=document.querySelector("#facebookRegContainer .speratorText");d.appendChild(e),document.querySelector("#ssoReg.thirdPartyAuth").appendChild(d)}},_moveButtons:function(){socialSignOnLib.facebook.config.loginActive&&socialSignOnLib.apple.config.loginActive&&(null!==document.getElementById("facebookLoginContainer")&&document.querySelector("#ssoLogin.thirdPartyAuth").appendChild(document.querySelector("#facebookLoginContainer")),document.querySelector("#ssoLogin.thirdPartyAuth").appendChild(document.querySelector("#appleLoginContainer"))),socialSignOnLib.facebook.config.regActive&&socialSignOnLib.apple.config.regActive&&(null!==document.getElementById("facebookRegContainer")&&document.querySelector("#ssoReg.thirdPartyAuth").appendChild(document.querySelector("#facebookRegContainer")),document.querySelector("#ssoReg.thirdPartyAuth").appendChild(document.querySelector("#appleRegContainer")))},_moveErrors:function(){var a=document.querySelector("#facebookLoginContainer .regFacebookGenericError");socialSignOnLib.facebook.config.loginActive&&socialSignOnLib.apple.config.loginActive&&null!==a&&document.querySelector("#ssoLogin.thirdPartyAuth").appendChild(a);var b=document.querySelector("#facebookRegContainer .regFacebookGenericError");socialSignOnLib.facebook.config.regActive&&socialSignOnLib.apple.config.regActive&&null!==b&&document.querySelector("#ssoReg.thirdPartyAuth").appendChild(b)}}};socialSignOnLib=socialSignOnLib||{},socialSignOnLib.util={_loadScript:function(a,b){var c=document.createElement("script");c.setAttribute("src",a),document.getElementsByTagName("head")[0].appendChild(c),c.onloadDone||void 0===b||(c.onloadDone=!0,c.onload=function(){b()},c.onerror=function(){})},_loadCss:function(a){var b=document.createElement("link");b.setAttribute("rel","stylesheet"),b.setAttribute("type","text/css"),b.setAttribute("media","screen, projection"),b.setAttribute("href",a),document.getElementsByTagName("head")[0].appendChild(b)},isDevSystem:function(){var a=document.location.host;return a.indexOf(".dev")>-1||a.indexOf(".internal")>-1||a.indexOf(".office")>-1||a.indexOf("localhost")>-1},getGetParamFromUrl:function(a,b){if(null===a||null===b||-1===a.indexOf("?"))return null;for(var c=a.split("?",2),d=c[1],e=d.split("&"),f=0;f<e.length;f++){var g=e[f],h=g.split("=",2);if(h[0]===b)return decodeURIComponent(h[1])}return null},_setValueInAllInputs:function(a,b){for(var c=document.querySelectorAll("input[name="+a+"]"),d=0;d<c.length;++d)c[d].setAttribute("value",b)},sanitizeString:function(a){return String(a).replace(/[&<>"']/g,"")},loadingIndicator:{indicatorTimer:null,_show:function(a){var b=document.querySelector("#"+a);b.setAttribute("disabled",!0),this.indicatorTimer=window.setTimeout(function(){pegExternalModifier.util._addClass(b,"disabled"),pegExternalModifier.util._addClass(b,"is-loading")},1500)},_hide:function(a){var b=document.querySelector("#"+a);window.clearTimeout(this.indicatorTimer),b.removeAttribute("disabled"),pegExternalModifier.util._removeClass(b,"disabled"),pegExternalModifier.util._removeClass(b,"is-loading")}},hasLocalStorage:function(){try{return localStorage.setItem("featureDetectLocalStorage",""),localStorage.removeItem("featureDetectLocalStorage"),!0}catch(a){return!1}}},socialSignOnLib=socialSignOnLib||{},socialSignOnLib.facebook={config:{loginActive:null,regActive:null,regContainer:null,loginContainer:null,currentClickButton:"",hasTimeoutOrPlatformError:!1,timeoutTimer:null,checkTimeoutOrPlatformDuration:1e4,staticPathExtModifier:null},_init:function(){this.config.regContainer=document.getElementById("facebookRegContainer"),this.config.loginContainer=document.getElementById("facebookLoginContainer"),this.config.staticPathExtModifier="/static_cms/".concat(dynamicConf.brandName,"/static/peg_utils/peg_external_modifier/"),this._confLoaded()},insertAfter:function(a,b){a.parentNode.insertBefore(b,a.nextSibling)},_confLoaded:function(){(dynamicConf.facebook.isRegistrationAllowed||dynamicConf.facebook.isLoginAllowed)&&(this.domNodes._createAllDomNodes(),this.setEventlistenerForInfoI(),pegExternalModifier.util._triggerCustomEvent("facebook-domPrepareDone"))},setEventlistenerForInfoI:function(){for(var a=this,b=document.querySelectorAll("a.facebookInfo"),c=0;c<b.length;++c)null!==b[c]&&b[c].addEventListener("click",function(b){b.preventDefault(),b.stopPropagation(),a.showInfoModalbox()})},showInfoModalbox:function(){null===document.querySelector(".facebookInfoModal")?(this.loadModalboxComponent(),document.querySelector(".facebookInfoModal").addEventListener("init",function(){document.querySelector(".facebookInfoModal").show()})):document.querySelector(".facebookInfoModal").show()},loadModalboxComponent:function(){var a=this.config.staticPathExtModifier;void 0===window.customElements?socialSignOnLib.util._loadScript(a+"polyfill/webcomponentsjs/webcomponents-bundle.js",function(){socialSignOnLib.util._loadScript(a+"wdc-modalbox.js")}):socialSignOnLib.util._loadScript(a+"wdc-modalbox.js");var b=document.createElement("div");b.innerHTML='<wdc-modalbox class="facebookInfoModal">\n\t\t\t\t<span slot="headline">'.concat(dynamicConf.facebook.infoModal.headline,"</span>\n\t\t\t\t").concat(dynamicConf.facebook.infoModal.content,"\n\t\t\t</wdc-modalbox>"),document.body.appendChild(b)},util:{_showGenericError:function(){var a=document.querySelector(".regFacebookGenericError");a.setAttribute("class",a.getAttribute("class")+" is-visible"),pegExternalModifier.util._triggerCustomEvent("facebook-statusTimeout"),pegExternalModifier.util._triggerCustomEvent("pegLogger-logJsError",{message:"Facebook: GenericError (Timout fired)",origin:"Caught_JsError"})},hideGenericError:function(){for(var a=document.querySelectorAll(".regFacebookGenericError"),b=0;b<a.length;b++)pegExternalModifier.util._removeClass(a[b],"is-visible")}}},socialSignOnLib.facebook=socialSignOnLib.facebook||{},socialSignOnLib.facebook.domNodes={_createAllDomNodes:function(){this.createRegistrationNodes(),this.createLoginNodes(),this._showButton()},createRegistrationNodes:function(){var a,b,c;if(null!==socialSignOnLib.facebook.config.regContainer){a={buttonId:"facebookRegButton",containerElement:socialSignOnLib.facebook.config.regContainer},b=this._createButtonTag(a),b.appendChild(this._createButtonTextNode(a)),b.appendChild(this._createLoadingIndicator()),b.appendChild(this._createInfoI());!1===socialSignOnLib.apple.config.regActive&&(c=this._createSperator(a),a.containerElement.appendChild(c)),a.containerElement.appendChild(b),this._addHiddenInputs(a)}},createLoginNodes:function(){var a,b,c;if(null!==socialSignOnLib.facebook.config.loginContainer){var d="facebookLoginButton";void 0!==socialSignOnLib.facebook.config.loginContainer.dataset.buttonid&&(d=socialSignOnLib.facebook.config.loginContainer.dataset.buttonid),a={buttonId:d,containerElement:socialSignOnLib.facebook.config.loginContainer},b=this._createButtonTag(a),b.appendChild(this._createButtonTextNode(a)),b.appendChild(this._createLoadingIndicator()),b.appendChild(this._createInfoI()),a.containerElement.appendChild(b),this._addHiddenInputs(a);!1===socialSignOnLib.apple.config.loginActive&&(c=this._createSperator(a),a.containerElement.appendChild(c))}},_createButtonTag:function(a){var b=document.createElement("button");return b.setAttribute("type","button"),b.setAttribute("id",a.buttonId),b.setAttribute("class","has-loadingIndicator"),b.setAttribute("aria-label","Facebook login"),b},_createButtonTextNode:function(a){var b=a.containerElement.getElementsByClassName("buttonText")[0],c=document.createElement("span");c.setAttribute("class","text");var d=void 0!==a.containerElement.getElementsByClassName("buttonText_sm")[0],e=void 0!==a.containerElement.getElementsByClassName("buttonText_lxl")[0];if(d&&e){var f=document.createElement("span");f.setAttribute("class","buttonText_sm");var g=a.containerElement.getElementsByClassName("buttonText_sm")[0];f.appendChild(document.createTextNode(g.innerHTML)),c.appendChild(f);var h=document.createElement("span");h.setAttribute("class","buttonText_lxl");var i=a.containerElement.getElementsByClassName("buttonText_lxl")[0];h.appendChild(document.createTextNode(i.innerHTML)),c.appendChild(h)}else!1===d&&!1===e?c.appendChild(document.createTextNode(b.innerHTML)):pegExternalModifier.util._triggerCustomEvent("pegLogger-logJsError",{message:"Facebook: Wrong DOM Structure for buttonText",origin:"Caught_JsError"});return a.containerElement.removeChild(b),c},_createSperator:function(a){var b=document.createElement("div");b.setAttribute("class","socialSignOnSeparator");var c=a.containerElement.getElementsByClassName("speratorText");return c.length>0&&b.appendChild(c[0]),b},_createLoadingIndicator:function(){var a=document.createElement("span");return a.setAttribute("class","loader trippleDot"),a},_createInfoI:function(){var a=document.createElement("style");a.innerHTML="\n\t\t\t#facebookLoginContainer {\n\t\t\t\tposition: relative;\n\t\t\t}\n\t\t\t.facebookInfo { \n\t\t\t\tdisplay: block;\n\t\t\t\tposition: absolute;\n\t\t\t\theight: 28px;\n\t\t\t\twidth: 28px;\n\t\t\t\ttop: -6px;\n\t\t\t\tright: -4px;\n\t\t\t\ttext-decoration: none;\n    \t\t\tcolor: inherit;  /* Die Farbe soll von der Seite kommen */\n\t\t\t\tcursor: help;\n\t\t\t}\n\t\t\t.facebookInfo:active,\n\t\t\t.facebookInfo:hover {\n\t\t\t\tcolor: inherit \n\t\t\t}\n\t\t\t.facebookInfo span {\n\t\t\t\tdisplay: block;\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 8px;\n\t\t\t\tleft: 7px;\n\t\t\t\twidth: 14px;\n\t\t\t\theight: 14px;\n\t\t\t\tpadding-left: 5px;\n\t\t\t\tpadding-top: 1px;\n\t\t\t\tfont: normal 11px/1 sans-serif; \n\t\t\t\ttext-align: left;\n\t\t\t\tborder: 1px solid; /* Die Farbe soll von der Seite kommen */\n\t\t\t\tborder-radius: 50%;\n\t\t\t\toverflow: hidden;\n\t\t\t\ttext-transform: lowercase;\n\t\t\t}\n\t\t",document.getElementsByTagName("head")[0].appendChild(a);var b=document.createElement("a");b.setAttribute("href","#"),b.setAttribute("class","facebookInfo"),b.setAttribute("role","button"),b.setAttribute("aria-label","Info");var c=document.createElement("span");return c.innerText="i",b.appendChild(c),b},_addHiddenInputs:function(a){for(var b=["socialProvider","socialAccessToken","socialEmailAddress"],c=null,d=b.length,e=0;e<d;e++)c=document.createElement("input"),c.setAttribute("type","hidden"),c.setAttribute("name",b[e]),c.setAttribute("value",""),a.containerElement.appendChild(c)},_showButton:function(){null!==socialSignOnLib.facebook.config.regContainer&&dynamicConf.facebook.isRegistrationAllowed&&pegExternalModifier.util._addClass(socialSignOnLib.facebook.config.regContainer,"is-visible"),null!==socialSignOnLib.facebook.config.loginContainer&&dynamicConf.facebook.isLoginAllowed&&pegExternalModifier.util._addClass(socialSignOnLib.facebook.config.loginContainer,"is-visible")}},socialSignOnLib.facebook=socialSignOnLib.facebook||{},socialSignOnLib.facebook.withUrlParams={init:function(a){socialSignOnLib.facebook.config.currentClickButton=a,this._prepareUiForFbCommunication(),this._loadSdk()},_loadSdk:function(){var a=this;if("undefined"==typeof FB){var b="//connect.facebook.net/"+dynamicConf.facebook.locale+"/sdk.js";socialSignOnLib.util._loadScript(b,function(){try{FB.init({appId:dynamicConf.facebook.appId,version:dynamicConf.facebook.version,xfbml:!0}),a._checkFacebookLoginStatus()}catch(a){socialSignOnLib.util.loadingIndicator._hide(socialSignOnLib.facebook.config.currentClickButton),socialSignOnLib.facebook.util._showGenericError(),pegExternalModifier.util._triggerCustomEvent("pegLogger-logJsError",{message:"Facebook: API Error - FB.init() failed",stacktrace:a.message,origin:"Caught_JsError"})}})}else a._checkFacebookLoginStatus()},_checkFacebookLoginStatus:function(a){a=a||{};var b=this;FB.getLoginStatus(function(c){b._resetUiAfterFbCommunication(),"not_authorized"===c.status?b._handleNotAuthorizedState(a):"unknown"===c.status?b._handleUnknownState(a):"connected"===c.status&&b._handleConnectedState(c)})},_handleNotAuthorizedState:function(){this.openPopupWithSdk(),pegExternalModifier.util._triggerCustomEvent("facebook-statusNotAuthorized",{currentClickButton:socialSignOnLib.facebook.config.currentClickButton})},_handleUnknownState:function(){this.openPopupWithSdk(),pegExternalModifier.util._triggerCustomEvent("facebook-statusUnknown",{currentClickButton:socialSignOnLib.facebook.config.currentClickButton})},_handleConnectedState:function(a){var b=this;socialSignOnLib.util._setValueInAllInputs("socialProvider","FACEBOOK"),socialSignOnLib.util._setValueInAllInputs("socialAccessToken",a.authResponse.accessToken),b._getCurrentUserEmail(function(a,c){socialSignOnLib.util._setValueInAllInputs("socialEmailAddress",a),b._resetUiAfterFbCommunication(),socialSignOnLib.util.hasLocalStorage()&&localStorage.setItem("isFacebookUser",!0),pegExternalModifier.util._triggerCustomEvent("facebook-statusConnected",{currentClickButton:socialSignOnLib.facebook.config.currentClickButton,email:a,errorMessage:c})})},_getCurrentUserEmail:function(a){var b=this;b._prepareUiForFbCommunication(),FB.api("/me",{fields:"email"},function(c){var d="",e="";b._resetUiAfterFbCommunication(),void 0!==c.email?d=c.email:void 0!==c.error&&(e=c.error),a(d,e)})},openPopupWithSdk:function(a){a=a||{};var b=this;b._resetUiAfterFbCommunication();var c={};c.scope="email",a.reRequestPermission&&(c.auth_type="rerequest"),FB.login(function(){b._checkFacebookLoginStatus()},c)},getDeclinedPermissions:function(a){FB.api("/me/permissions",function(b){for(var c=[],d=b.data.length,e=0;e<d;e++)"declined"===b.data[e].status&&c.push(b.data[e].permission);a(c)})},_prepareUiForFbCommunication:function(){socialSignOnLib.facebook.util.hideGenericError(),this._showFBErrorWhenTimeout(),socialSignOnLib.util.loadingIndicator._show(socialSignOnLib.facebook.config.currentClickButton)},_resetUiAfterFbCommunication:function(){socialSignOnLib.facebook.config.hasTimeoutOrPlatformError=!1,socialSignOnLib.util.loadingIndicator._hide(socialSignOnLib.facebook.config.currentClickButton)},_showFBErrorWhenTimeout:function(){socialSignOnLib.facebook.config.hasTimeoutOrPlatformError=!0,window.clearTimeout(socialSignOnLib.facebook.config.timeoutTimer),socialSignOnLib.facebook.config.timeoutTimer=window.setTimeout(function(){!0===socialSignOnLib.facebook.config.hasTimeoutOrPlatformError&&(socialSignOnLib.facebook.util._showGenericError(),socialSignOnLib.util.loadingIndicator._hide(socialSignOnLib.facebook.config.currentClickButton))},socialSignOnLib.facebook.config.checkTimeoutOrPlatformDuration)}},socialSignOnLib.facebook=socialSignOnLib.facebook||{},socialSignOnLib.facebook.withoutUrlParams={openPopup:function(a){socialSignOnLib.facebook.config.currentClickButton=a.clickedId,socialSignOnLib.facebook.util.hideGenericError();var b=this._generatePopupUrl(a);this._openPopup(b)},_generatePopupUrl:function(a){var b="https://www.facebook.com/"+dynamicConf.facebook.version+"/dialog/oauth/?",c=dynamicConf.facebook.appId,d=dynamicConf.ownerUrl+"/static_cms/"+dynamicConf.brandName+"/static/peg_utils/social_sign_on/facebook_popup.html",e="";"facebookRegButton"===socialSignOnLib.facebook.config.currentClickButton?e=dynamicConf.ownerUrl+"/profile/registration":"facebookLoginButton"===socialSignOnLib.facebook.config.currentClickButton?e=dynamicConf.ownerUrl+"/login/":"facebookDAELoginButton"===socialSignOnLib.facebook.config.currentClickButton&&(e=dynamicConf.ownerUrl+"/settings/personaldata/personaldatainquiry");var f='{"targetPage":"'+e+'","mySex":"'+a.mySex+'","esSex":"'+a.esSex+'","orientationPermission":"'+a.orientationPermission+'","currentClickedId":"'+socialSignOnLib.facebook.config.currentClickButton+'"}';return b+"display=popup&response_type=code&scope=email&client_id="+c+"&redirect_uri="+encodeURIComponent(d)+"&state="+encodeURIComponent(f)},_openPopup:function(a){var b=window.location.hostname;"/"===a.substr(0,1)&&(a="//"+b+a);var c="menubar=no,location=no,directories=no,toolbar=no,screenX=0,screenY=0,scrollbars=no,resizable=no";c+=",width=640,height=555";var d=open(a,"SSO640555",c);null!==d&&d.focus()}},socialSignOnLib=socialSignOnLib||{},socialSignOnLib.apple={config:{regActive:!1,loginActive:!1,regContainer:null,loginContainer:null,currentClickButton:""},_init:function(){this.util._setPolyfills(),this.config.regContainer=document.querySelector("#appleRegContainer"),this.config.loginContainer=document.querySelector("#appleLoginContainer"),(this.config.regActive||this.config.loginActive)&&(this._showAppleButtons(),pegExternalModifier.util._triggerCustomEvent("apple-domPrepareDone"))},_showAppleButtons:function(){this.config.loginActive&&(this._createLoginDomNodes(),this._setLoginButtonHref(),this.config.loginContainer.classList.add("is-visible")),this.config.regActive&&(this._createRegDomNodes(),this.config.regContainer.classList.add("is-visible"))},_createLoginDomNodes:function(){this.config.loginContainer.appendChild(this._createEmptyNode());var a=this.config.loginContainer.getElementsByClassName("buttonText")[0];this.config.loginContainer.getElementsByClassName("text")[0].innerText=a.innerText,this.config.loginContainer.removeChild(a)},_createRegDomNodes:function(){this.config.regContainer.appendChild(this._createEmptyNode());var a=this.config.regContainer.getElementsByClassName("buttonText")[0];this.config.regContainer.getElementsByClassName("text")[0].innerText=a.innerText,this.config.regContainer.removeChild(a)},_createEmptyNode:function(){var a=document.createElement("a");a.setAttribute("class","signInWithApple"),a.setAttribute("aria-label","Apple Login"),a.setAttribute("role","button"),a.setAttribute("href","#");var b=document.createElement("span");return b.setAttribute("class","text"),a.appendChild(b),a},_setLoginButtonHref:function(){var a=encodeURIComponent("".concat(dynamicConf.apple.callbackDomain,"/appleCallback")),b=this.config.loginContainer.dataset.href;b&&(a=encodeURIComponent("".concat(dynamicConf.apple.callbackDomain).concat(b)));var c=encodeURIComponent("action=login&oid=".concat(dynamicConf.ownerId)),d=encodeURIComponent("code id_token"),e="https://appleid.apple.com/auth/authorize?client_id=".concat(dynamicConf.apple.clientId,"&redirect_uri=").concat(a,"&response_type=").concat(d,"&response_mode=").concat("form_post","&scope=").concat("email","&state=").concat(c);this.config.loginContainer.getElementsByClassName("signInWithApple")[0].setAttribute("href",e)},setRegButtonHref:function(a){var b=encodeURIComponent("".concat(dynamicConf.apple.callbackDomain,"/appleCallback")),c=encodeURIComponent("action=reg&oid=".concat(dynamicConf.ownerId,"&search=").concat(a.mySex+a.esSex)),d=encodeURIComponent("code id_token"),e="https://appleid.apple.com/auth/authorize?client_id=".concat(dynamicConf.apple.clientId,"&redirect_uri=").concat(b,"&response_type=").concat(d,"&response_mode=").concat("form_post","&scope=").concat("email","&state=").concat(c);this.config.regContainer.getElementsByClassName("signInWithApple")[0].setAttribute("href",e)},localFormPreparation:{init:function(a){var b=window.location.href,c=socialSignOnLib.util.sanitizeString(socialSignOnLib.util.getGetParamFromUrl(b,"id_token")),d=socialSignOnLib.util.sanitizeString(socialSignOnLib.util.getGetParamFromUrl(b,"code"));this._addHiddenInputs(a),socialSignOnLib.util._setValueInAllInputs("socialProvider","APPLE"),socialSignOnLib.util._setValueInAllInputs("id_token",c),socialSignOnLib.util._setValueInAllInputs("code",d)},_addHiddenInputs:function(a){for(var b=["socialProvider","id_token","code"],c=null,d=b.length,e=0;e<d;e++)c=document.createElement("input"),c.setAttribute("type","hidden"),c.setAttribute("name",b[e]),c.setAttribute("value",""),a.appendChild(c)}},util:{_setPolyfills:function(){}}},pegExternalModifier=pegExternalModifier||{},pegExternalModifier.cookieBanner={init:function(){var a=this;this.polyfillForRemove(),pegExternalModifier.dynamicConfigProvider.load(function(){"object"===("undefined"==typeof dynamicConf?"undefined":_typeof(dynamicConf))&&"object"===_typeof(dynamicConf.cookiebanner)&&(a.setCookieIfUserIsAlreadyRegistered(),null===a.cookie.get("tms_infobanner")&&(a.loadCssFile(),a.addCookiebannerToDom(dynamicConf),a.setEventListener(),a.track.bannerIsShown()))})},addCookiebannerToDom:function(a){var b=a.cookiebanner,c="<span>".concat(b.bannerText,'</span><a href="#" class="js-optOutAllow">').concat(b.okButtonText,"</a>"),d=document.createElement("div");d.setAttribute("id","pegCookiebanner"),d.classList.add("optOut"),document.getElementsByTagName("body")[0].appendChild(d),document.getElementById("pegCookiebanner").innerHTML=c},setEventListener:function(){var a=this;document.addEventListener("scroll",function(){a.toggleVisibility()}),window.addEventListener("resize",function(){a.toggleVisibility()}),null!==document.querySelector(".js-optOutAllow")&&document.querySelector(".js-optOutAllow").addEventListener("click",function(b){b.preventDefault(),document.querySelector("#pegCookiebanner").remove(),a.setTmsInfobannerCookie("dismiss"),a.track.clickedOk()})},loadCssFile:function(){var a=document.createElement("link"),b="/static_cms/".concat(this.getBrandName(),"/static/peg_utils/peg_external_modifier/cookiebanner.css");a.setAttribute("rel","stylesheet"),a.setAttribute("type","text/css"),a.setAttribute("href",b),document.getElementsByTagName("head")[0].appendChild(a)},toggleVisibility:function(){if(null!==document.getElementById("pegCookiebanner")){var a=void 0!==window.MSInputMethodContext&&void 0!==document.documentMode,b=null!==document.querySelector("html.phantomjs"),c=this,d=document.body.scrollHeight>window.innerHeight,e=document.getElementById("pegCookiebanner").classList,f=!1;!1===a&&!1===b&&window.NodeList&&void 0!==NodeList.prototype.forEach&&document.querySelectorAll("footer").forEach(function(a){null===a.closest(".wdk-modalbox")&&(f=c.isInViewport(a))});var g=f||this.isInViewport(document.querySelector("#footer"));d&&g?e.add("hide"):e.remove("hide")}},isInViewport:function(a){if(null!==a){var b=a.getBoundingClientRect();return b.top>=0&&b.left>=0&&b.bottom-40<=(window.innerHeight||document.documentElement.clientHeight)&&b.right<=(window.innerWidth||document.documentElement.clientWidth)}},setTmsInfobannerCookie:function(a){this.cookie.set("tms_infobanner",a,"760")},setCookieIfUserIsAlreadyRegistered:function(){null!==document.getElementById("domPageVars")&&(null!==document.getElementById("domPageVars").getAttribute("data-user-id")&&this.setTmsInfobannerCookie("dismiss"))},getBrandName:function(){var a="parship";return window.location.hostname.indexOf("elitepartner")>-1?a="elitepartner":window.location.hostname.indexOf("eharmony")>-1&&(a="eharmony"),a},track:{bannerIsShown:function(){pegExternalModifier.util._triggerCustomEvent("pegLogger-trackingPermission",{category:"tracking_choice",subcategory:"tracking_choice_dialog",targetId:"dialog",action:"show"})},clickedOk:function(){pegExternalModifier.util._triggerCustomEvent("pegLogger-trackingPermission",{category:"tracking_choice",subcategory:"tracking_choice_dialog",targetId:"ok_button",action:"click"})}},cookie:{set:function(a,b,c){var d="";if(c){var e=new Date;e.setTime(e.getTime()+24*c*60*60*1e3),d="; expires="+e.toUTCString()}document.cookie=a+"="+(b||"")+d+"; path=/; domain="+pegExternalModifier.cookieBanner.getMainDomain(document.location.host)},get:function(a){for(var b=a+"=",c=document.cookie.split(";"),d=0;d<c.length;d++){for(var e=c[d];" "===e.charAt(0);)e=e.substring(1,e.length);if(0===e.indexOf(b))return e.substring(b.length,e.length)}return null}},getMainDomain:function(a){var b=/^.*?((\.?[^.]+?)(\.([^.]+?)\.[^.]+?))$/,c=b.exec(a);if(c){var d=c[4],e=c[3];return"co"!==d&&"com"!==d||(e=c[1]),e}return a},polyfillForRemove:function(){"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)})}},document.addEventListener("DOMContentLoaded",function(){("undefined"!=typeof encodedPTR||"undefined"!=typeof ptr)&&pegExternalModifier.cookieBanner.init()}),pegExternalModifier=pegExternalModifier||{};var pegExternalModifierScript=document.currentScript;pegExternalModifier.webcomponent={load:function(a,b){var c="";pegExternalModifierScript.src.indexOf(".soma.")>-1&&(c="https://www.eharmony.com.soma.parship.dev"),void 0===window.customElements?this._loadScript("".concat(c,"/static_cms/eharmony/static/peg_utils/wdc/polyfill/webcomponents-bundle.js"),function(){this._loadScript("".concat(c,"/static_cms/eharmony/static/peg_utils/wdc/components/").concat(a,"/").concat(b,"/").concat(a,".js"))
}):this._loadScript("".concat(c,"/static_cms/eharmony/static/peg_utils/wdc/components/").concat(a,"/").concat(b,"/").concat(a,".js"))},_loadScript:function(a,b){var c=document.createElement("script");c.setAttribute("src",a),document.getElementsByTagName("head")[0].appendChild(c),c.onloadDone||void 0===b||(c.onloadDone=!0,c.onload=function(){b()})}},pegExternalModifier.util._triggerCustomEvent("pegExternalModifier:loaded");
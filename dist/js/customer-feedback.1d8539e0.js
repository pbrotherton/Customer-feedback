!function(e){var t={};function r(c){if(t[c])return t[c].exports;var o=t[c]={i:c,l:!1,exports:{}};return e[c].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,c){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(r.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(c,o,function(t){return e[t]}.bind(null,o));return c},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}({2:function(e,t,r){"use strict";r.r(t);window.addEventListener("DOMContentLoaded",(function(e){!function(){function e(){this.handleEvents()}e.prototype.submitComment=function(e,t,r,c,o,a,n,l){var i={action:"submit_comment",postid:r,comment:o,answerid:t,commenttype:c,email:a,captcha:n,topicid:l},u=e;$.post(ajaxurl,i,(function(e){u.querySelector("#feedback-loader").style.display="none","true"==e?(u.querySelector(".customer-feedback-comment").style.display="none",u.querySelector(".customer-feedback-thanks").style.display="block"):(u.querySelector(".customer-feedback-comment").style.display="none",u.querySelector(".customer-feedback-error").style.display="block")}))},e.prototype.submitInitialResponse=function(e,t,r){var c={action:"submit_response",postid:t,answer:r};document.querySelector("#feedback-loader").style.display="block",$.post(ajaxurl,c,(function(e){if(200!=e.status&&(document.querySelector(".customer-feedback-js-error").style.display="block"),!isNaN(parseFloat(e))&&isFinite(e)){var t=document.createElement("input");t.type="hidden",t.name="customer-feedback-answer-id",t.value=e,document.querySelector('[name="customer-feedback-post-id"]').parentElement.appendChild(t),document.querySelector(".customer-feedback-comment-email").parentElement.style.display="none",document.querySelector(".customer-feedback-answers").style.display="none",document.querySelector(".customer-feedback-comment").style.display="block"}"yes"==c.answer&&!isNaN(parseFloat(e))&&isFinite(e)&&(document.querySelector(".feedback-label-yes").style.display="block"),"no"==c.answer&&!isNaN(parseFloat(e))&&isFinite(e)&&(document.querySelector(".feedback-label-no").style.display="block"),document.getElementById("feedback-loader").style.display="none"}))},e.prototype.removeJsErrorMessages=function(){document.getElementById("customer-feedback").querySelectorAll(".feedback-form-dynamic-error").forEach((function(e){e.remove()}))},e.prototype.handleEvents=function(){var e=document.querySelectorAll("[data-action=customer-feedback-submit-response]"),t=this;e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),e.stopPropagation(),this.setAttribute("aria-pressed",!0);var r=document.getElementById("customer-feedback-post-id").value,c=this.getAttribute("value");t.submitInitialResponse(this,r,c)}))})),document.querySelectorAll("[data-action=customer-feedback-submit-comment]").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var r=document.getElementById("customer-feedback");r.querySelector('[name="customer-feedback-comment-text"]').setAttribute("aria-invalid",!1),r.querySelector('[name="customer-feedback-comment-topic"]').setAttribute("aria-invalid",!1),r.querySelector('[name="customer-feedback-comment-email"]').setAttribute("aria-invalid",!1),t.removeJsErrorMessages();var c=null,o=null,a=r.querySelector('[name="customer-feedback-answer-id"]').value,n=r.querySelector('[name="customer-feedback-post-id"]').value,l=r.querySelector('[name="customer-feedback-comment-text"]').value,i=r.querySelector('[name="customer-feedback-comment-email"]').value,u=r.querySelector('[name="customer-feedback-comment-email"]').getAttribute("required"),m=!0;if(1==r.querySelectorAll('[name="customer-feedback-comment-topic"]:checked').length)c=r.querySelector('[name="customer-feedback-comment-topic"]:checked').value;else{var s=document.createElement("div");s.id="topic-error",s.classList="c-option__input-invalid-message feedback-form-dynamic-error",s.style.display="block",s.appendChild(document.createTextNode(feedback.select_topic)),r.querySelector(".customer-feedback-topics").after(s),m=!1}if(feedback.site_key&&r.querySelector('[name="g-recaptcha-response"]')&&""!==r.querySelector('[name="g-recaptcha-response"]').value&&(o=r.querySelector('[name="g-recaptcha-response"]').value),l.length<15){var d=document.createElement("div");d.id="length-error",d.classList="c-textarea-invalid-message feedback-form-dynamic-error",d.style.display="block",d.appendChild(document.createTextNode(feedback.comment_min_characters)),r.querySelector('[name="customer-feedback-comment-text"]').setAttribute("aria-invalid",!0),r.querySelector('[name="customer-feedback-comment-text"]').after(d),m=!1}if(0===i.length&&"true"==u){var f=document.createElement("div");f.id="email-error",f.classList="c-field__input-invalid-message feedback-form-dynamic-error",f.style.display="block",f.style.marginTop="0px",f.appendChild(document.createTextNode(feedback.enter_email)),r.querySelector('[name="customer-feedback-comment-email"]').setAttribute("aria-invalid",!0),r.querySelector('[name="customer-feedback-comment-email"]').after(f),m=!1}if(!m)return!1;r.querySelector("#feedback-loader").style.display="block",t.submitComment(r,a,n,"comment",l,i,o,c)}))}))};document.querySelectorAll('[name="customer-feedback-comment-topic"]').forEach((function(e){e.addEventListener("change",(function(e){var t=document.querySelector("#customer-feedback");e.target.getAttribute("feedback-capability")?(t.querySelector('[name="customer-feedback-comment-email"]').setAttribute("required",!0),t.querySelector(".customer-feedback-comment-email").style.display="block"):(t.querySelector('[name="customer-feedback-comment-email"]').setAttribute("required",!1),t.querySelector(".customer-feedback-comment-email").style.display="none")}))})),new e}()}))}});
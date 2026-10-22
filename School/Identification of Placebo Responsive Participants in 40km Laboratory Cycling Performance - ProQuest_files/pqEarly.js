/*

 Any copyright is dedicated to the Public Domain.
 http://creativecommons.org/publicdomain/zero/1.0/

 Released under the MIT license
 Copyright (c) 2021 MDN contributors
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 OR OTHER DEALINGS IN THE SOFTWARE.
*/
var pqEarly=function(){let userInitiatedFocus=false;return{getCookie:function(name){var nameEQ=name+"\x3d";var ca=document.cookie.split(";");for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==" ")c=c.substring(1,c.length);if(c.indexOf(nameEQ)==0)return c.substring(nameEQ.length,c.length)}return""},executeOnInitialization:function(callbackParam){const targetNode=document.querySelector("body#background");const config={attributes:true};const callback=function(mutationsList,observer){for(const mutation of mutationsList)if(mutation.type===
"attributes")if(mutation.target.getAttribute("data-page-initialized")==="true"){callbackParam();observer.disconnect()}};const observer=new MutationObserver(callback);observer.observe(targetNode,config)},postponeUntilReady:function(){const postponedElements=[];const handleClick=function(event){userInitiatedFocus=true;pqEarly.pollyfillClosest();const element=event.target.tagName==="INPUT"||event.target.tagName==="A"?event.target:event.target.closest("a");if(element!=null&&(element.hasAttribute("data-update-zone")||
element.hasAttribute("data-postpone-event"))){event.preventDefault();console.warn("Waiting for the page to be initialized before allowing the click to proceed.");if(!pqEarly.contains(postponedElements,element)){postponedElements.push(element);pqEarly.executeOnInitialization(function(){element.click()})}}};document.addEventListener("click",handleClick);const removeHandleClick=function(){document.removeEventListener("click",handleClick);userInitiatedFocus=false};pqEarly.executeOnInitialization(removeHandleClick)},
pollyfillClosest:function(){if(!Element.prototype.matches)Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;if(!Element.prototype.closest)Element.prototype.closest=function(s){var el=this;do{if(Element.prototype.matches.call(el,s))return el;el=el.parentElement||el.parentNode}while(el!==null&&el.nodeType===1);return null}},contains:function(theArray,item){let i=theArray.length;while(i--)if(theArray[i]===item)return true;return false},stopFocus:function(){return userInitiatedFocus},
domLoaded:function(event){pqEarly.ajaxAnchorTagPreventDefault();pqEarly.updateAjaxAnchorTagsAfterAjaxZoneUpdateOrModalOpen();const canHover=!matchMedia("(hover: none)").matches;if(canHover)document.body.classList.add("can-hover")},ajaxAnchorTagPreventDefault:function(){const dataUpdateZoneElements=document.querySelectorAll("[data-update-zone]");const preventDefaultCode="event.preventDefault();";for(const element of dataUpdateZoneElements){var onclick=element.getAttribute("onclick");if(onclick==null)onclick=
"";if(element.tagName=="A")if(!onclick.toLowerCase().includes(preventDefaultCode.toLowerCase()))element.setAttribute("onclick",preventDefaultCode+onclick)}},updateAjaxAnchorTagsAfterAjaxZoneUpdateOrModalOpen:function(){const bodyElement=document.querySelector("body#background");let isAjaxActive=false;const observer=new MutationObserver(function(mutationsList){mutationsList.forEach(function(mutation){if(mutation.type==="attributes"&&mutation.attributeName==="data-ajax-active"){const newValue=mutation.target.getAttribute("data-ajax-active");
if(newValue==="1"&&!isAjaxActive)isAjaxActive=true;else if(newValue==="0"&&isAjaxActive){isAjaxActive=false;setTimeout(function(){pqEarly.ajaxAnchorTagPreventDefault()},1E3)}}else if(mutation.type==="childList")if(mutation.addedNodes.length>0){const bodyClasses=Array.from(bodyElement.classList);if(bodyClasses.includes("modal-open"))pqEarly.ajaxAnchorTagPreventDefault()}})});const config={attributes:true,childList:true,subtree:true};observer.observe(bodyElement,config)}}}();
window.addEventListener("DOMContentLoaded",function(event){pqEarly.domLoaded(event)});
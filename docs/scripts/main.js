"use strict";$(document).ready(function(){var e=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"body",t=document.querySelector(e).scrollHeight;$(n).animate({scrollTop:t},"500","swing")};document.querySelector("#js-btn-scroll-down").addEventListener("click",function(){e("#app-page")})});
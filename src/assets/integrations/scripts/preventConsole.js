// "use strict";
// (function() {
//   function detectDevTool() {
//     const threshold = 160; // Ajusta este valor si es necesario
//     if (
//       window.outerWidth - window.innerWidth > threshold ||
//       window.outerHeight - window.innerHeight > threshold
//     ) {
//       consoleCheck();
//     }
//   }

//   function initDetectDevTool() {
//     detectDevTool();
//     window.addEventListener('resize', detectDevTool);
//     window.addEventListener('focus', detectDevTool);
//   }

//   if (document.readyState === "complete" || document.readyState === "interactive") {
//     initDetectDevTool();
//   } else {
//     window.addEventListener('load', initDetectDevTool);
//   }
// })();

// function consoleCheck() {
//   document.querySelector('body').innerHTML = 'Si tenés dudas de cómo funciona la aplicación (nosotros también) contactanos a contacto.sportsreel@gmail.com y nos juntamos un ratito :)';
// }

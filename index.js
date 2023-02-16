// Can also be included with a regular script tag
import Typed from 'typed.js';

var typed = new Typed('.typed', {
  strings: ["First sentence.", "Second sentence."],
  typeSpeed: 30
});


// var options = {
//   strings: ['Student', 'Web dev'],
//   typeSpeed: 40
// };

// var typed = new Typed('.typed', options);

// const typed = select(".typed");
// if (typed) {
//   let typed_strings = typed.getAttribute("data-typed-items");
//   typed_strings = typed_strings.split(",");
//   new Typed(".typed", {
//     strings: typed_strings,
//     loop: true,
//     typeSpeed: 100,
//     backSpeed: 50,
//     backDelay: 2000,
//   });
// }

// var typed = new Typed(".typed", {
//   stringsElement: 'Studend, Web Developer, UI Designer',
//   typeSpeed: 0,
//   backSpeed: 0,
//   backDelay: 500,
//   startDelay: 1000,
//   loop: false,
//   onBegin: function(self) { prettyLog('onBegin ' + self) },
//   onComplete: function(self) { prettyLog('onCmplete ' + self) },
//   preStringTyped: function(pos, self) { prettyLog('preStringTyped ' + pos + ' ' + self); },
//   onStringTyped: function(pos, self) { prettyLog('onStringTyped ' + pos + ' ' + self) },
//   onLastStringBackspaced: function(self) { prettyLog('onLastStringBackspaced ' + self) },
//   onTypingPaused: function(pos, self) { prettyLog('onTypingPaused ' + pos + ' ' + self) },
//   onTypingResumed: function(pos, self) { prettyLog('onTypingResumed ' + pos + ' ' + self) },
//   onReset: function(self) { prettyLog('onReset ' + self) },
//   onStop: function(pos, self) { prettyLog('onStop ' + pos + ' ' + self) },
//   onStart: function(pos, self) { prettyLog('onStart ' + pos + ' ' + self) },
//   onDestroy: function(self) { prettyLog('onDestroy ' + self) }
// });
  

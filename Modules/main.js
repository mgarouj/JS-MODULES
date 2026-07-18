import {add, PI } from './math.js'
import Player from './player.js';
import player from './player.js'

console.log(add(2, 3));
const p = new Player("john");



// Key differences from C++ headers

// No copy-pasting text (like #include does) — the module system tracks real dependencies
// Each file's variables are private by default — nothing leaks unless explicitly exported (no global namespace pollution)
// Import path needs the .js extension in vanilla JS (unlike C++ headers)
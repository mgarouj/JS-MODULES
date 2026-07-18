import {add, PI } from './math.js'
import Player from './player.js';

console.log(add(2, 3));
const p = new Player("john");



// Key differences from C++ headers

// No copy-pasting text (like #include does) — the module system tracks real dependencies
// Each file's variables are private by default — nothing leaks unless explicitly exported (no global namespace pollution)
// Import path needs the .js extension in vanilla JS (unlike C++ headers)







// Same import/export syntax works if your package.json has "type": "module". Otherwise Node uses the older require()/module.exports system (CommonJS) — you'll likely see both in tutorials, but stick to import/export since it's the modern standard and what TypeScript expects.
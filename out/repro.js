"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const paper = require("paper");
paper.setup(new paper.Size(20, 20));
paper.view.exportImage("", () => { }); //ok
//will stop working on 'yarn add paper@0.12.4' and 'yarn build'
//# sourceMappingURL=repro.js.map
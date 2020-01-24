import * as paper from 'paper';

paper.setup(new paper.Size(20, 20));

//View.exportImage is declared in types/paper.d.ts

paper.view.exportImage("", () => {}); //ok

//will stop working in update to 'yarn add paper@0.12.4' and 'yarn build'

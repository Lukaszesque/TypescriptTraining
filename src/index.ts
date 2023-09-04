import './style.css';
import * as logic from './logic'

  RunGame();

  export function RunGame() 
  {

      document.body.appendChild(logic.loadGrid());
      logic.loadGrid();
  }

  export function AddMemory(thingToAdd:string, arrayToModify:string[]) 
  {
    return arrayToModify.push(thingToAdd);
  }


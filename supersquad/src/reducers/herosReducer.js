import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions/index';
import { createCharacter } from './helpers';

function heros(state = [], action) {
  switch (action.type) {
    case ADD_CHARACTER:
      let heros = [...state, createCharacter(action.id)];
      return heros;
    case REMOVE_CHARACTER:
      heros = state.filter(item => item.id !== action.id);
      return heros;
    default:
      return state;
  }
}
export default heros;

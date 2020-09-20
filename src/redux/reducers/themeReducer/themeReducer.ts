import { CREATE_THEME, ADD_MESSAGE } from '../../types/types';

interface Themes {
  [key: string]: string[]
}

interface ActionType {
  type: string,
  payload: {
    title: string,
    message: string[],
  }
}

const initialState: Themes = {
  'Messages': [],
  'FAQ': [],
};

const updateState = localStorage.getItem('data');

const currentState: Themes = updateState === null ? initialState : JSON.parse(updateState);

export const themeReducer = (state = currentState, action: ActionType) => {
  switch(action.type) {
    case CREATE_THEME:
      return { ...state, [action.payload.title]: action.payload.message}
    case ADD_MESSAGE:
      console.log(action.payload.message)
      return { ...state, [action.payload.title]: state[action.payload.title].concat(action.payload.message)}
    default:
      return state;
  }
}
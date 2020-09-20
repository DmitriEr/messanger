import { CHANGE_THEME } from '../../types/types';

interface TitleType {
  title: string;
}

interface TitleAction {
  type: string,
  payload: string,
}

const initialState: TitleType = {
  title: 'Messages',
};

const updateState = localStorage.getItem('title');

const currentState: TitleType = updateState === null ? initialState : JSON.parse(updateState);

export const titleReducer = (state = currentState, action: TitleAction) => {
  switch(action.type) {
    case CHANGE_THEME:
      return {
        title: action.payload,
      }
    default:
      return state;
  }
};
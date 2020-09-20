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

export const titleReducer = (state = initialState, action: TitleAction) => {
  switch(action.type) {
    case CHANGE_THEME:
      return {
        title: action.payload,
      }
    default:
      return state;
  }
};
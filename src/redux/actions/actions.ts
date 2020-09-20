import { CREATE_THEME, CHANGE_THEME, ADD_MESSAGE } from '../types/types';

export function createTheme(theme: any) {
  return {
    type: CREATE_THEME,
    payload: theme,
  }
};

export function changeTitle(title: string) {
  return {
    type: CHANGE_THEME,
    payload: title,
  }
}

export function addMessage(message: string) {
  return {
    type: ADD_MESSAGE,
    payload: message,
  }
}
import { combineReducers } from 'redux';
import { themeReducer } from '../reducers/themeReducer/themeReducer';
import { titleReducer } from '../reducers/titleReducer/titleReducer';



export const rootReducer = combineReducers({
  themes: themeReducer,
  title: titleReducer, 
})
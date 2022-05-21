import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import LocaleReducer from './LocaleReducer';
import UserReducer from './UserReducer';

const rootReducer = combineReducers({ selectedLocale: LocaleReducer, user: UserReducer });

export default configureStore({ reducer: rootReducer });
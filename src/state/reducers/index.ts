import { combineReducers } from 'redux';
import modulesReducer from './modulesReducer';

const reducers = combineReducers({
    modules: modulesReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
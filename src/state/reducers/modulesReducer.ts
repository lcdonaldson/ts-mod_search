import { ActionType } from '../action-types';
import { Action } from '../actions';

// Interface state
interface ModulesState {
    loading: boolean;
    error: string | null;
    data: string[];
}
const initialState = {
    loading: false,
    error: null,
    data: []
}
// reducer
const reducer = (
    state: ModulesState = initialState, 
    action: Action
): ModulesState => {
    switch (action.type) {
        case ActionType.SEARCH_MODULES:
            return { loading: true, error: null, data: [] };
        case ActionType.SEARCH_MODULES_SUCCESS:
            return { loading: false, error: null, data: action.payload };
        case ActionType.SEARCH_MODULES_ERROR:
            return { loading: false, error: action.payload, data: [] };
        default:
            return state;
    }
}

export default reducer;
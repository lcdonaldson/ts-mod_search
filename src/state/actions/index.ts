import { ActionType } from '../action-types';

// Interface actions
interface SearchModulesAction { 
    type: ActionType.SEARCH_MODULES; 
}
interface SearchModulesSuccessAction { 
    type: ActionType.SEARCH_MODULES_SUCCESS;
    payload: string[]
}
interface SearchModulesErrorAction { 
    type: ActionType.SEARCH_MODULES_ERROR;
    payload: string;
}

// type union
export type Action = 
    | SearchModulesAction 
    | SearchModulesSuccessAction 
    | SearchModulesErrorAction
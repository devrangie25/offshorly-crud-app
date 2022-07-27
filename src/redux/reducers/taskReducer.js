import { ActionTypes } from "../actions/action.types";

export default function taskReducer(state = [], action) {
    switch (action.type) {
        case ActionTypes.CREATE_TASK:
            return [...state, action.payload];
        case ActionTypes.FETCH_TASKS_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}
import ACTION_TYPES from '../actions/actionType';
const INITIAL_STATE = {user:''}

export default 	(state = INITIAL_STATE, action) => {

	switch(action.type){
		case ACTION_TYPES.REGISTER_TYPE:
        console.log('in loading action listing'+action.payload)
    	return {...state, user:action.payload}

		default:
			return state;
	}
};

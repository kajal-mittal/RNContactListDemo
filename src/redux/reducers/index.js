import { combineReducers } from 'redux';
import ContactReducer from './ContactReducer';

export default combineReducers({
	// the keys here are going to be the property of state that we are producing.
	contact_reducer: ContactReducer
});

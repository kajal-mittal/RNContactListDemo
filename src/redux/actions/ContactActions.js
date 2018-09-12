import { ADD_NEW_CONTACT } from './types';

export const createContact = contact => {
	return {
		type: ADD_NEW_CONTACT,
		contact: contact
	};
};

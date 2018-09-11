import { GET_ALL_CONTACTS, ADD_NEW_CONTACT } from './types';

export const getAllContacts = contact => {
	return {
		type: GET_ALL_CONTACTS,
		contact: contact
	};
};
export const createContact = contact => {
	return {
		type: ADD_NEW_CONTACT,
		contact: contact
	};
};

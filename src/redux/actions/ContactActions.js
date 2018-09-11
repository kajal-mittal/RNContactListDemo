import { GET_ALL_CONTACTS, ADD_NEW_CONTACT } from './types';

export const GetAllContacts = contact => {
	return {
		type: GET_ALL_CONTACTS,
		payload: contact
	};
};
export const createContact = contact => {
	return {
		type: ADD_NEW_CONTACT,
		contact: contact
	};
};

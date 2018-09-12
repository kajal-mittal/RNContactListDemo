import { ADD_NEW_CONTACT } from './types';
import { AsyncStorage } from 'react-native';

export const createContact = contact => {
	return dispatch => {
		AsyncStorage.getItem('contactsList')
			.then(value => {
				const contacts = value ? JSON.parse(value) : [];
				contacts.push(contact);
				///sorting
				contacts.sort((a, b) => {
					if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
					if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
					return 0;
				});
				//saving contacts list to local storage
				AsyncStorage.setItem('contactsList', JSON.stringify(contacts))
					.then(() => {
						dispatch({
							type: ADD_NEW_CONTACT,
							contact: contacts
						});
					})
					.catch(error => {
						console.warn(error);
					});
			})
			.catch(error => {
				console.warn(error);
			});
	};
};
export const contactDelete = ({ id }) => {
	return dispatch => {
		AsyncStorage.getItem('contactsList')
			.then(value => {
				const contacts = JSON.parse(value);
				contacts.splice(id, 1);
				AsyncStorage.setItem('contactsList', JSON.stringify(contacts))
					.then(() => {
						dispatch({ type: ADD_NEW_CONTACT, contact: contacts });
					})
					.catch(error => {
						console.error(error);
					});
			})
			.catch(error => {
				console.error(error);
			});
	};
};

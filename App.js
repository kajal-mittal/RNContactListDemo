/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { createStackNavigator, NavigationActions } from 'react-navigation';
import LoginScene from './src/Component/registration/LoginScene';
import CheckLoginScene from './src/Component/registration/CheckLoginScene';
import HomeScene from './src/Component/registration/HomeScene';
import SignupScene from './src/Component/registration/SignupScene';
import AddContactScene from './src/Component/contact/AddContactScene';
import ContactDetailScene from './src/Component/contact/ContactDetailScene';

const AppFlow = createStackNavigator({
	CheckLoginScene: {
		screen: CheckLoginScene,
		navigationOptions: {
			header: null
		}
	},
	Login: {
		screen: LoginScene,
		navigationOptions: {
			header: null
		}
	},
	Signup: {
		screen: SignupScene,
		navigationOptions: {
			header: null
		}
	},
	Home: {
		screen: HomeScene,
		navigationOptions: {
			header: null
		}
	},
	AddContact: {
		screen: AddContactScene,
		navigationOptions: {
			header: null
		}
	},
	ContactDetailScene: {
		screen: ContactDetailScene,
		navigationOptions: {
			header: null
		}
	}
});
//prevent multiple screens to open when click on button 2-3 times
const navigateOnce = getStateForAction => (action, state) => {
	const { type, routeName } = action;
	return state && type === NavigationActions.NAVIGATE && routeName === state.routes[state.routes.length - 1].routeName
		? state
		: getStateForAction(action, state);
};
AppFlow.router.getStateForAction = navigateOnce(AppFlow.router.getStateForAction);
export default class App extends PureComponent {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<AppFlow />
			</View>
		);
	}
}

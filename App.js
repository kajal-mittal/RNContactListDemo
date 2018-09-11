/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import LoginScene from './src/Component/registration/LoginScene';
import HomeScene from './src/Component/registration/HomeScene';
import SignupScene from './src/Component/registration/SignupScene';
import AddContactScene from './src/Component/contact/AddContactScene';
import ContactDetailScene from './src/Component/contact/ContactDetailScene';

const AppFlow = createStackNavigator({
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
		screen: AddContactScene
	},
	ContactDetailScene: {
		screen: ContactDetailScene
	}
});
export default class App extends PureComponent {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<AppFlow />
			</View>
		);
	}
}

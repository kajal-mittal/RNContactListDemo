/** @format */

import App from './App';
import { name as appName } from './app.json';
import React, { PureComponent } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import HomeScene from './src/Component/registration/HomeScene';

class RNRedux extends PureComponent {
	render() {
		return (
			<Provider store={store}>
				<App />
			</Provider>
		);
	}
}

AppRegistry.registerComponent(appName, () => RNRedux);

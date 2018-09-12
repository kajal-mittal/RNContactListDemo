import { View, AsyncStorage, ActivityIndicator, StatusBar } from 'react-native';
import React, { PureComponent } from 'react';

import ViewStyles from '../../theme/ViewStyles';

export default class CheckLoginScene extends PureComponent {
	constructor(props) {
		super(props);
		this.checkLogin();
	}

	checkLogin = async function() {
		const checkLogin = await AsyncStorage.getItem('@LoginComplete');
		if (!!checkLogin && checkLogin === 'true') {
			this.props.navigation.navigate('Home');
		} else {
			this.props.navigation.navigate('Login');
		}
	};

	render() {
		return (
			<View style={ViewStyles.container}>
				<ActivityIndicator />
				<StatusBar barStyle="default" />
			</View>
		);
	}
}

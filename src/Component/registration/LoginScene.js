import { View, TextInput, AsyncStorage } from 'react-native';
import React, { PureComponent } from 'react';
import TextStyles from '../../theme/TextStyles';
import ViewStyles from '../../theme/ViewStyles';

import CommonButton from '../../CommonComponents/CommonButton';

export default class LoginScene extends PureComponent {
	constructor(props) {
		super(props);
	}
	// componentWillMount = () => {};
	// checkLogin = async function() {
	// 	const checkLogin = await AsyncStorage.getItem('@LoginComplete');
	// 	if (!!checkLogin && checkLogin === 'true') {
	// 		this.props.navigation.navigate('Home');
	// 	}
	// };

	render() {
		return (
			<View style={ViewStyles.container}>
				<TextInput placeholder={'Username'} style={TextStyles.formInput} />
				<TextInput placeholder={'Password'} style={[TextStyles.formInput, { marginBottom: 20 }]} />
				<CommonButton title={'Login'} onPress={() => this.props.navigation.navigate('Home')} />
				<CommonButton title={'Signup'} onPress={() => this.props.navigation.navigate('Signup')} />
			</View>
		);
	}
}

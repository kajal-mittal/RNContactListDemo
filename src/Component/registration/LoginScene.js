import { View, TextInput, BackHandler } from 'react-native';
import React, { PureComponent } from 'react';
import TextStyles from '../../theme/TextStyles';
import ViewStyles from '../../theme/ViewStyles';

import CommonButton from '../../CommonComponents/CommonButton';

export default class LoginScene extends PureComponent {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
	}

	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
	}
	handleBackPress = () => {
		BackHandler.exitApp();
	};

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

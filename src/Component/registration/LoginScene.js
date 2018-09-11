import { View, StyleSheet, TextInput } from 'react-native';
import React, { PureComponent } from 'react';
import TextStyles from '../../theme/TextStyles';

import CommonButton from '../../CommonComponents/CommonButton';

export default class LoginScene extends PureComponent {
	render() {
		return (
			<View style={styles.container}>
				<TextInput placeholder={'Username'} style={TextStyles.formInput} />
				<TextInput placeholder={'Password'} style={[TextStyles.formInput, { marginBottom: 20 }]} />
				<CommonButton title={'Login'} onPress={() => this.props.navigation.navigate('Home')} />
				<CommonButton title={'Signup'} onPress={() => this.props.navigation.navigate('Signup')} />
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 65,
		paddingHorizontal: 40,
		backgroundColor: 'white'
	}
});

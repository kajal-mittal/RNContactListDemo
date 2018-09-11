import { View, StyleSheet, TextInput } from 'react-native';
import React, { PureComponent } from 'react';
import TextStyles from '../../theme/TextStyles';
import CommonButton from '../../CommonComponents/CommonButton';

export default class SignupScene extends PureComponent {
	render() {
		return (
			<View style={styles.container}>
				<TextInput placeholder={'Username'} style={TextStyles.formInput} />
				<TextInput placeholder={'Email'} keyboardType={'email-address'} style={TextStyles.formInput} />
				<TextInput placeholder={'Password'} style={TextStyles.formInput} />
				<TextInput placeholder={'Confirm Password'} style={TextStyles.formInput} />
				<TextInput
					placeholder={'Phone Number'}
					keyboardType={'phone-pad'}
					style={[TextStyles.formInput, { marginBottom: 20 }]}
				/>

				<CommonButton title={'Signup'} onPress={() => this.props.navigation.navigate('Home')} />
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

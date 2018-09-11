import { View, StyleSheet, TextInput } from 'react-native';
import React, { PureComponent } from 'react';

import FooterButton from '../../CommonComponents/FooterButton';

export default class LoginScene extends PureComponent {
	render() {
		return (
			<View style={styles.container}>
				<TextInput placeholder={'Username'} style={{ height: 40, borderColor: 'gray', borderBottomWidth: 1 }} />

				<TextInput
					placeholder={'Password'}
					style={{ height: 40, marginTop: 20, borderColor: 'gray', borderBottomWidth: 1, marginBottom: 20 }}
				/>
				<FooterButton title={'Login'} onPress={() => this.props.navigation.navigate('Home')} />
				<FooterButton title={'Signup'} onPress={() => this.props.navigation.navigate('Signup')} />
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
	},
	labelInput: {
		color: '#673AB7'
	},
	formInput: {
		borderBottomWidth: 1.5,
		marginLeft: 20,
		borderColor: '#333'
	},
	input: {
		borderWidth: 0
	}
});

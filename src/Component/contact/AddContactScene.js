import { View, StyleSheet, TextInput } from 'react-native';
import React, { PureComponent } from 'react';

import FooterButton from '../../CommonComponents/FooterButton';

export default class AddContactScene extends PureComponent {
	render() {
		return (
			<View style={styles.container}>
				<TextInput placeholder={'Name'} style={{ height: 40, borderColor: 'gray', borderBottomWidth: 1 }} />
				<TextInput
					placeholder={'Email'}
					style={{ height: 40, marginTop: 20, borderColor: 'gray', borderBottomWidth: 1 }}
				/>
				<TextInput
					placeholder={'Phone Number'}
					style={{ height: 40, marginTop: 20, borderColor: 'gray', borderBottomWidth: 1, marginBottom: 20 }}
				/>
				<FooterButton title={'Add Contact'} onPress={() => this.props.navigation.navigate('Home')} />
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

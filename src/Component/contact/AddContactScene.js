import { View, StyleSheet, TextInput } from 'react-native';
import React, { PureComponent } from 'react';
import TextStyles from '../../theme/TextStyles';
import FooterButton from '../../CommonComponents/FooterButton';

export default class AddContactScene extends PureComponent {
	render() {
		return (
			<View style={styles.container}>
				<TextInput placeholder={'Name'} style={TextStyles.formInput} />
				<TextInput placeholder={'Email'} style={TextStyles.formInput} />
				<TextInput placeholder={'Phone Number'} style={[TextStyles.formInput, { marginBottom: 20 }]} />
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
	}
});

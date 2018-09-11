import { View, StyleSheet, TextInput } from 'react-native';
import React, { PureComponent } from 'react';
import TextStyles from '../../theme/TextStyles';
import FooterButton from '../../CommonComponents/FooterButton';
import { connect } from 'react-redux';
class ContactDetailScene extends PureComponent {
	render() {
		const { navigation } = this.props;
		let index = navigation.getParam('index', 0);
		return (
			<View style={styles.container}>
				<TextInput placeholder={'Name'} style={TextStyles.formInput} value={this.props.contacts[index].name} />
				<TextInput
					placeholder={'Email'}
					keyboardType={'email-address'}
					style={TextStyles.formInput}
					value={this.props.contacts[index].email}
				/>
				<TextInput
					placeholder={'Phone Number'}
					keyboardType={'phone-pad'}
					style={TextStyles.formInput}
					value={this.props.contacts[index].phoneNumber}
				/>
				<FooterButton title={'Update Contact'} onPress={() => this.props.navigation.navigate('Home')} />
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
function mapStateToProps(state) {
	return {
		contacts: state.contact_reducer.contacts
	};
}
export default connect(mapStateToProps)(ContactDetailScene);

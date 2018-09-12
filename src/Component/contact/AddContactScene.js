import { View, StyleSheet, TextInput, AsyncStorage, Alert } from 'react-native';
import React, { PureComponent } from 'react';
import TextStyles from '../../theme/TextStyles';
import ViewStyles from '../../theme/ViewStyles';
import CommonButton from '../../CommonComponents/CommonButton';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
class AddContactScene extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			phoneNumber: ''
		};
	}
	_storeData = () => {
		if (!!this.state.name && !!this.state.email && !!this.state.phoneNumber) {
			let contact = {
				name: this.state.name,
				email: this.state.email,
				phoneNumber: this.state.phoneNumber
			};
			this.props.createContact(contact);

			// try {
			// 	await AsyncStorage.setItem('@MYCONTACTS', JSON.stringify(this.props.contacts));
			// } catch (error) {
			// 	// Error retrieving data
			// }
			this.props.navigation.goBack();
		} else {
			Alert.alert('Error', 'Please enter Contact details.', [
				{
					text: 'Ok'
				}
			]);
		}
	};

	render() {
		return (
			<View style={ViewStyles.container}>
				<TextInput
					placeholder={'Name'}
					style={TextStyles.formInput}
					onChangeText={text => {
						this.setState({ name: text });
					}}
				/>
				<TextInput
					placeholder={'Email'}
					style={TextStyles.formInput}
					keyboardType={'email-address'}
					onChangeText={text => {
						this.setState({ email: text });
					}}
				/>
				<TextInput
					placeholder={'Phone Number'}
					keyboardType={'phone-pad'}
					style={[TextStyles.formInput, { marginBottom: 20 }]}
					onChangeText={text => {
						this.setState({ phoneNumber: text });
					}}
				/>
				<CommonButton title={'Add Contact'} onPress={this._storeData} />
			</View>
		);
	}
}

const mapStateToProps = state => {
	return {
		contacts: state.contacts
	};
};
const mapDispatchToProps = dispatch => {
	return {
		createContact: contact => dispatch(actions.createContact(contact))
	};
};
// Pass it as the first argument to our connect function.

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddContactScene);

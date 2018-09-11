import { View, StyleSheet, TextInput, AsyncStorage } from 'react-native';
import React, { PureComponent } from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import TextStyles from '../../theme/TextStyles';
import CommonButton from '../../CommonComponents/CommonButton';
import { connect } from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react-redux';
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
	_storeData = async () => {
		let contact = {
			name: this.state.name,
			email: this.state.email,
			phoneNumber: this.state.phoneNumber
		};
		this.props.createContact(contact);
		try {
			await AsyncStorage.setItem('@MYCONTACTS', JSON.stringify(this.props.contacts));
		} catch (error) {
			// Error retrieving data
		}
	};

	render() {
		return (
			<View style={styles.container}>
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
					onChangeText={text => {
						this.setState({ email: text });
					}}
				/>
				<TextInput
					placeholder={'Phone Number'}
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
const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 65,
		paddingHorizontal: 40
	}
});

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

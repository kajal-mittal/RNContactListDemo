import { View, TextInput } from 'react-native';
import React, { PureComponent } from 'react';
import TextStyles from '../../theme/TextStyles';
import ViewStyles from '../../theme/ViewStyles';
import CommonButton from '../../CommonComponents/CommonButton';
import { connect } from 'react-redux';
import { contactDelete } from '../../redux/actions';
import * as actions from '../../redux/actions';
class ContactDetailScene extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			contact: this.props.navigation.state.params.rowData,
			name: this.props.navigation.state.params.rowData.name,
			email: this.props.navigation.state.params.rowData.email,
			phoneNumber: this.props.navigation.state.params.rowData.phoneNumber
		};
	}

	render() {
		//console.error(this.props.navigation.state.params.index);
		return (
			<View style={ViewStyles.container}>
				<TextInput
					placeholder={'Name'}
					style={TextStyles.formInput}
					value={this.state.name}
					onChangeText={name => this.setState({ name })}
				/>
				<TextInput
					placeholder={'Email'}
					keyboardType={'email-address'}
					style={TextStyles.formInput}
					value={this.state.email}
					onChangeText={email => this.setState({ email })}
				/>
				<TextInput
					placeholder={'Phone Number'}
					keyboardType={'phone-pad'}
					style={TextStyles.formInput}
					value={this.state.phoneNumber}
					onChangeText={phoneNumber => this.setState({ phoneNumber })}
				/>
				<CommonButton
					title={'Update Contact'}
					onPress={() => {
						const id = this.props.navigation.state.params.index;
						this.props.contactDelete({ id });
						let contact = {
							name: this.state.name,
							email: this.state.email,
							phoneNumber: this.state.phoneNumber
						};
						this.props.createContact(contact);
						this.props.navigation.navigate('Home');
					}}
				/>
			</View>
		);
	}
}

function mapStateToProps(state) {
	return {
		contacts: state.contacts
	};
}
const mapDispatchToProps = dispatch => {
	return {
		createContact: contact => dispatch(actions.createContact(contact)),
		contactDelete
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ContactDetailScene);

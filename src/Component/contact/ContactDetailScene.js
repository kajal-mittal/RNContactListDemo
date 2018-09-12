import { View, TextInput, AsyncStorage } from 'react-native';
import React, { PureComponent } from 'react';
import TextStyles from '../../theme/TextStyles';
import ViewStyles from '../../theme/ViewStyles';
import CommonButton from '../../CommonComponents/CommonButton';
import { connect } from 'react-redux';
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
	componentWillMount = () => {
		this._retrieveData();
	};
	_retrieveData = async () => {
		AsyncStorage.getItem('contactsList')
			.then(value => {
				const contacts = JSON.parse(value);
				this.setState({ contact: contacts });
			})
			.catch(error => {});
	};

	render() {
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
						this.props.navigation.navigate('Home');
					}}
				/>
			</View>
		);
	}
}

function mapStateToProps(state) {
	return {
		contacts: state.contact_reducer.contacts
	};
}
export default connect(mapStateToProps)(ContactDetailScene);

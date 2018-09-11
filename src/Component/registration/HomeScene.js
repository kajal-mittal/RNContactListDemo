import { View, ListView, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class HomeScene extends PureComponent {
	constructor() {
		super();
		this.state = {
			contact: []
		};
	}
	_storeData = async () => {
		try {
			await AsyncStorage.setItem('@MyContacts', JSON.stringify(this.props.contacts));
		} catch (error) {
			// Error saving data
			console.warn('Error to save contacts');
		}
	};
	componentDidMount = () => {
		this._storeData();
		this._retrieveData();
	};

	_retrieveData = async () => {
		try {
			const value = await AsyncStorage.getItem('@MyContacts');
			if (value !== null) {
				// We have data!!
				this.setState({ contact: JSON.parse(value) });

				console.warn('data is' + JSON.parse(value));
			}
		} catch (error) {
			// Error retrieving data
		}
	};

	render() {
		this.data = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(this.props.contacts);
		return (
			<View style={{ flex: 1 }}>
				<View style={{ backgroundColor: 'blue', height: 50, width: '100%', flexDirection: 'row' }}>
					<Text style={{ color: 'white', alignSelf: 'center', flex: 0.9 }}> Logout</Text>
					<Text
						style={{ color: 'white', alignSelf: 'center', flex: 0.1 }}
						onPress={() => {
							this.props.navigation.navigate('AddContact');
						}}
					>
						Add
					</Text>
				</View>

				{!!this.props && !!this.props.contacts && this. !== 0 ? (
					<ListView dataSource={this.data} renderRow={this.renderRow.bind(this)} />
				) : (
					<Text>No Data Found</Text>
				)}
			</View>
		);
	}
	renderRow(data, sectionID, rowID, itemIndex, itemID) {
		return (
			<TouchableOpacity
				style={{
					elevation: 4,
					margin: 10,
					padding: 10,
					backgroundColor: 'white'
				}}
				onPress={() => {
					this.props.navigation.navigate('ContactDetailScene', { index: rowID });
				}}
			>
				<Text style={{ fontSize: 15, fontStyle: 'bold', color: 'black' }}>{data.name}</Text>
				<Text style={{ fontSize: 12 }}>{data.email}</Text>
				<Text style={{ fontSize: 12 }}>{data.phoneNumber}</Text>
			</TouchableOpacity>
		);
	}
}

function mapStateToProps(state) {
	return {
		contacts: state.contact_reducer.contacts
	};
}
export default connect(mapStateToProps)(HomeScene);

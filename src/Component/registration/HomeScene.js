import { View, ListView, Text, TouchableOpacity, AsyncStorage, StyleSheet } from 'react-native';
import React, { PureComponent } from 'react';

export default class HomeScene extends PureComponent {
	constructor() {
		super();
		this.state = {
			contact: []
		};
	}

	componentWillMount = () => {
		this._retrieveData();
		this.setLoginData();
	};
	componentDidMount = () => {
		this._willFocus = this.props.navigation.addListener('willFocus', () => {
			setTimeout(() => {
				this._retrieveData();
			}, 900);
		});
	};
	componentWillUnmount() {
		this._willFocus.remove();
	}

	setLoginData = async function() {
		try {
			const checkLogin = await AsyncStorage.getItem('@LoginComplete');
			if (checkLogin !== 'false') {
				await AsyncStorage.setItem('@LoginComplete', 'true');
			}
		} catch (error) {}
	};

	_retrieveData = async () => {
		AsyncStorage.getItem('contactsList')
			.then(value => {
				if (value != null) {
					const contacts = JSON.parse(value);

					this.setState({ contact: contacts });
				}
			})
			.catch(error => {});
	};

	render() {
		this.data = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(this.state.contact);
		return (
			<View style={{ flex: 1 }}>
				<View style={styles.header}>
					<Text style={[styles.headerText, { flex: 0.9 }]} onPress={() => this._signOutAsync()}>
						{' '}
						Logout
					</Text>
					<Text
						style={[styles.headerText, { flex: 0.1 }]}
						onPress={() => {
							this.props.navigation.navigate('AddContact');
						}}
					>
						Add
					</Text>
				</View>

				{this.state.contact.length !== 0 ? (
					<ListView dataSource={this.data} renderRow={this.renderRow.bind(this)} />
				) : (
					<Text style={{ flex: 1, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', fontSize: 30 }}>
						No Data Found
					</Text>
				)}
			</View>
		);
	}
	_signOutAsync = async () => {
		await AsyncStorage.clear();
		this.props.navigation.goBack();
	};
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
					this.props.navigation.navigate('ContactDetailScene', { rowData: data, index: rowID });
				}}
			>
				<Text style={{ fontSize: 15, fontStyle: 'bold', color: 'black' }}>{data.name}</Text>
				<Text style={{ fontSize: 12 }}>{data.email}</Text>
				<Text style={{ fontSize: 12 }}>{data.phoneNumber}</Text>
			</TouchableOpacity>
		);
	}
}
const styles = StyleSheet.create({
	header: {
		backgroundColor: 'blue',
		height: 50,
		width: '100%',
		flexDirection: 'row'
	},
	headerText: {
		color: 'white',
		alignSelf: 'center'
	}
});

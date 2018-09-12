import { View, ListView, Text, TouchableOpacity, AsyncStorage, StyleSheet, BackHandler } from 'react-native';
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

	handleBackPress = () => {
		BackHandler.exitApp();
	};

	componentDidMount = () => {
		BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
		this._willFocus = this.props.navigation.addListener('willFocus', () => {
			setTimeout(() => {
				this._retrieveData();
			}, 500);
		});
	};
	componentWillUnmount() {
		this._willFocus.remove();
		BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
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
					<View style={{ flex: 0.8, marginLeft: 20 }}>
						<Text style={styles.headerText} onPress={() => this._signOutAsync()}>
							Logout
						</Text>
					</View>
					<View style={{ flex: 0.2 }}>
						<Text
							style={styles.headerText}
							onPress={() => {
								this.props.navigation.navigate('AddContact');
							}}
						>
							Add
						</Text>
					</View>
				</View>

				{this.state.contact.length !== 0 ? (
					<ListView dataSource={this.data} renderRow={this.renderRow.bind(this)} />
				) : (
					<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
						<Text style={{ alignSelf: 'center', fontSize: 30 }}>No Data Found</Text>
					</View>
				)}
			</View>
		);
	}
	_signOutAsync = async () => {
		await AsyncStorage.clear();
		this.props.navigation.pop();
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
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row'
	},
	headerText: {
		color: 'white'
	}
});

import { View, ListView, Text } from 'react-native';
import React, { PureComponent } from 'react';

export default class HomeScene extends PureComponent {
	constructor() {
		super();
		const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
		this.state = {
			dataSource: ds.cloneWithRows(['row 1', 'row 2'])
		};
	}
	render() {
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
				<ListView dataSource={this.state.dataSource} renderRow={this.renderRow.bind(this)} />
			</View>
		);
	}
	renderRow(data) {
		return (
			<Text
				onPress={() => {
					this.props.navigation.navigate('ContactDetailScene');
				}}
			>
				{'Kajal'}
			</Text>
		);
	}
}

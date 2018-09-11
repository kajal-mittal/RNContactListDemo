import { View, ListView, Text } from 'react-native';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
class HomeScene extends PureComponent {
	constructor() {
		super();
		const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
		this.state = {
			dataSource: ds.cloneWithRows(['row 1', 'row 2'])
		};
	}
	componentDidMount = () => {
		this.props.GetAllContacts();
	};

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
				{/* {!!this.props.contact && <ListView dataSource={this.props.contact} renderRow={this.renderRow.bind(this)} />} */}
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
				{data.name}
			</Text>
		);
	}
}
const mapStateToProps = state => {
	console.warn(state);

	return {
		contact: state.contact_reducer.contact
	};
};

// Pass it as the first argument to our connect function.

export default connect(
	mapStateToProps,
	actions
)(HomeScene);

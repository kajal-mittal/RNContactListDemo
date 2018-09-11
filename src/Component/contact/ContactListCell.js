import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class ContactListCell extends PureComponent {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Text
				style={styles.sectionHeaderStyle}
				onPress={() => {
					this.props.navigation.navigate('AddContact');
				}}
			>
				{'Kajal'}
			</Text>
		);
	}
}

const styles = StyleSheet.create({
	sectionHeaderStyle: {
		backgroundColor: '#CDDC39',
		fontSize: 20,
		padding: 5,
		color: '#fff'
	}
});

export default ContactListCell;

import React, { PureComponent } from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

export default class CommonButton extends PureComponent {
	render() {
		return (
			<TouchableOpacity style={[styles.footerButton, this.props.style]} onPress={this.props.onPress}>
				<Text style={[styles.buttonTitle, this.props.textStyle]}>{this.props.title}</Text>
			</TouchableOpacity>
		);
	}
}
const styles = StyleSheet.create({
	footerButton: {
		flex: 0,
		height: 49,
		width: '100%',
		marginTop: 20,
		backgroundColor: 'blue',
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: 'grey',
		shadowOffset: { width: 2, height: 1 },
		shadowOpacity: 1,
		shadowRadius: 10
	},
	buttonTitle: {
		fontSize: 14,
		color: 'white'
	}
});

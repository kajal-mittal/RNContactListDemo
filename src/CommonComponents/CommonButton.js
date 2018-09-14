import React, { PureComponent } from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import ViewStyles from '../theme/ViewStyles';
export default class CommonButton extends PureComponent {
	render() {
		return (
			<TouchableOpacity style={[ViewStyles.footerButton, this.props.style]} onPress={this.props.onPress}>
				<Text style={[styles.buttonTitle, this.props.textStyle]}>{this.props.title}</Text>
			</TouchableOpacity>
		);
	}
}
const styles = StyleSheet.create({
	buttonTitle: {
		fontSize: 14,
		color: 'white'
	}
});

import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Home extends Component {
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View
				style={{
					flex: 1,
					backgroundColor: 'green',
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<Text>Home</Text>
				<TouchableOpacity
					style={{ backgroundColor: 'aqua', padding: 10 }}
					onPress={() => navigate('Detail')}
				>
					<Text>Go to Detail</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigate('DrawerOpen')}>
					<Text>Open</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import io from 'socket.io-client';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.socket = io('http://192.168.1.104:3000', { jsonp: false });
		this.state = {
			text: ''
		};
	}
	clickSend() {
		this.socket.emit('send-text', this.state.text);
	}
	render() {
		return (
			<View>
				<TextInput
					onChangeText={(text) => this.setState({ text })}
					value={this.state.text}
				/>
				<TouchableOpacity onPress={this.clickSend.bind(this)}>
					<Text>Send</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

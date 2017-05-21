import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import Home from './Views/Home';
import User from './Views/User';
import Detail from './Views/Detail';

const HomeStack = StackNavigator({
	Home: {
		screen: Home,
		navigationOptions: { title: 'Trang chủ' }
	},
	Detail: {
		screen: Detail,
		navigationOptions: { title: 'Chi tiết' }
	}
});

const UserStack = StackNavigator({
	User: {
		screen: User,
		navigationOptions: { title: 'Tài khoản' }
	}
});

const Tabs = TabNavigator({
	T_home: {
		screen: HomeStack,
		navigationOptions: {
			tabBarLabel: 'Trang chủ'
		}
	},
	T_user: {
		screen: UserStack,
		navigationOptions: {
			tabBarLabel: 'Tài khoản'
		}
	}
}, {
		tabBarOptions: {
			style: {
				backgroundColor: '#dedede',
			},
			inactiveTintColor: '#000',
			activeTintColor: 'blue'
		},
		tabBarPosition: 'bottom',
		swipeEnabled: true
	});

const SideMenu = DrawerNavigator({
	Tabbar: {
		screen: Tabs
	}
}, {
		drawerWidth: 300,
		drawerPosition: 'left',
		contentComponent: props => <ScrollView><Text {...props}>Menu</Text></ScrollView>
	});

export default class Nav extends Component {
	render() {
		return (
			<SideMenu />
		);
	}
}

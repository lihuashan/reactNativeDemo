/**
 * Created by lihuashan on 2017/9/25.
 */

import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';
import TabNavigatorBox from './pages/TabNavigatorBox'
import Home from './pages/Home'
import ListItem from './pages/ListItem'
const RouteConfig = {
	TabNavigatorBox:{
		screen:TabNavigatorBox,
		navigationOptions:({navigation}) => ({
			header:null,
			title:'TabNavigatorBox'
		})
	},
	ListItem: {
		screen: ListItem,
			navigationOptions: ({navigation}) => ({
			title: 'ListItem'
		})
	}
}
const StackNavigatorConfig = {
	initialRouteName: 'TabNavigatorBox',
	initialRouteParams: {initPara: '初始页面参数'},
	navigationOptions: {
		header: null,
		title: '标题',
		headerTitleStyle: {fontSize: 18, color: '#666666'},
		headerStyle: {height: 48, backgroundColor: '#fff'},
	},
	paths: 'pages/TabNavigatorBox',
	mode: 'card',
	headerMode: 'screen',
	cardStyle: {backgroundColor: "#ffffff"},
	transitionConfig: (() => ({
		screenInterpolator: CardStackStyleInterpolator.forHorizontal,
	})),
	onTransitionStart: (() => {
		//('111')
	}),
	onTransitionEnd: (() => {
		///(JSON.stringify(this))
	}),
};

export default App = StackNavigator(RouteConfig,StackNavigatorConfig);
/**
 * Created by lihuashan on 2017/9/27.
 */
import React from 'react';
import {Image} from 'react-native';
import { TabNavigator } from 'react-navigation';
import Home from './Home';
import CameraBox from './CameraBox'
import More from './More';
import Me from './Me'

const routerConfig = {
	Home:{
		getScreen: () => require('./Home').default,
		//screen:Home,
		paths: 'pages/Home',
		navigationOptions:({navigation}) => ({
			tabBarLabel: '首页',
			tabBarIcon: ({ tintColor }) => (
				<Image
					source={require('../images/ic_find_hot.png')}
					style={[{tintColor: tintColor,width:30,height:30}]}
				/>
			)
		}),
	},
	CameraBox:{
		getScreen: () => require('./CameraBox').default,
		//screen:CameraBox,
		paths: 'pages/CameraBox',
		navigationOptions:({navigation}) => ({
			tabBarLabel: '摄影',
			tabBarIcon: ({ tintColor }) => (
				<Image
					source={require('../images/ic_feed_tag.png')}
					style={[{tintColor: tintColor,width:30,height:30}]}
				/>
			)
		}),
	},
	More:{
		getScreen: () => require('./More').default,
		//screen:More,
		paths: 'pages/More',
		navigationOptions:({navigation}) => ({
			tabBarLabel: 'more',
			tabBarIcon: ({ tintColor }) => (
				<Image
					source={require('../images/ic_find_charts.png')}
					style={[{tintColor: tintColor,width:30,height:30}]}
				/>
			)
		}),
	},
	Me:{
		getScreen: () => require('./Me').default,
		//screen:Me,
		paths: 'pages/Me',
		navigationOptions:({navigation}) => ({
			tabBarLabel: 'me',
			tabBarIcon: ({ tintColor }) => (
				<Image
					source={require('../images/ic_find_latest.png')}
					style={[{tintColor: tintColor,width:30,height:30}]}
				/>
			)
		}),
	}
};

const tabOptionsConfig = {
	animationEnabled: false, // 切换页面时是否有动画效果
	tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
	swipeEnabled: true, // 是否可以左右滑动切换tab
	backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
	tabBarOptions: {
		activeTintColor: '#ff8500', // 文字和图片选中颜色
		inactiveTintColor: '#333', // 文字和图片未选中颜色
		showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
		indicatorStyle: {
			height: 1,  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
			backgroundColor:'red'
		},
		/*scrollEnabled: true,*/
		style: {
			backgroundColor: '#f1f1f1', // TabBar 背景色
		},
		labelStyle: {
			fontSize: 14, // 文字大小
		},
	}
}

export default TabNavigatorBox = TabNavigator(routerConfig,tabOptionsConfig);


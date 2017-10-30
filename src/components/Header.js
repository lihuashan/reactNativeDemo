/**
 * Created by lihuashan on 2017/9/25.
 */
import React, { PropTypes, Component } from 'react';
import {
	StyleSheet,
	ScrollView,
	Text,
	View,
	Button,
	StatusBar,
	Dimensions,
	Image,
	TouchableOpacity,
	Alert,
	BackHandler
} from 'react-native';

let { width, height } = Dimensions.get('window');
export default class Header extends Component {
	static propTypes = {
		statusBarHidden:PropTypes.bool.isRequired,
		statusBarShowHideTransition:PropTypes.string,
		statusBarAnimated:PropTypes.bool,
		height:PropTypes.number,
		backgroundColor:PropTypes.string,
		alignItems:PropTypes.string,
		headerTitle:PropTypes.string
	};
	static defaultProps = {
		statusBarAnimated: true,
		statusBarHidden: true,//true为蕴藏
		statusBarShowHideTransition: 'fade',
		height:50,
		backgroundColor:'red',
		alignItems:'center' //flex-start,flex-end
	};
	constructor(props) {
		super(props);
		this._handleBack = this._handleBack.bind(this);
	}
	render() {
		let {visible,statusBarHidden,statusBarShowHideTransition,statusBarAnimated,height,backgroundColor,alignItems,headerTitle} = this.props;
		return (
			<View>
				{this._renderStatusBarUI(statusBarHidden,statusBarShowHideTransition,statusBarAnimated)}
				{visible?
					<View style={[styles.header,{height:height,backgroundColor:backgroundColor,alignItems:alignItems}]}>
						<TouchableOpacity onPress={() => {this._onPressBack()}}>
							<Image
								source={require('../images/app_back_icon.png')}
								style={styles.backIcon}
								resizeMode={'stretch'} />
						</TouchableOpacity>
						<Text style={{flex:1,color:'white'}}>{headerTitle}</Text>
					</View>:null
				}
			</View>
		)
	}

	componentDidMount(){
		BackHandler.addEventListener('hardwareBackPress',this._handleBack)
	}

	componentWillUnmount(){
		BackHandler.removeEventListener('hardwareBackPress',this._handleBack)
	}

	/*
	* render StatusBarUI
	* */
	_renderStatusBarUI(statusBarHidden,statusBarShowHideTransition,statusBarAnimated){
		return (
			<StatusBar
				hidden={statusBarHidden}
				showHideTransition={statusBarShowHideTransition}
				animated={statusBarAnimated}
			/>
		)
	}

	_handleBack(){
		if (this.props.navigation.state.routeName=='Home') {
			BackHandler.exitApp();
		}
		this.props.navigation.goBack();
		return true;
	}

	/*
	* go back the preview
	* */
	_onPressBack(){
		this._handleBack();
	}
}

const styles = StyleSheet.create({
	header:{
		width:width,
		justifyContent:'center',
		flexDirection:'row'
	},
	backIcon:{
		width:25,
		height:25,
		marginLeft:15,
		marginRight:15
	}
})
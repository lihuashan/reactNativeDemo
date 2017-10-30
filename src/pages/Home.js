/**
 * Created by lihuashan on 2017/9/25.
 */
import React, { Component } from 'react';
import {
	StyleSheet,
	ScrollView,
	Text,
	View,
	Button,
	StatusBar,
	Dimensions,
	Image,
	Alert,
	TouchableOpacity
} from 'react-native';
import Header from '../components/Header'
import SwiperClassic from '../components/SwiperClassic'
let { width, height } = Dimensions.get('window');
const ListImage = [
	{
		name:'XXXXX-001',
		uri:require('../images/ic_share_android.png')
	},
	{
		name:'XXXXX-002',
		uri:require('../images/ic_share_article.png')
	},
	{
		name:'XXXXX-003',
		uri:require('../images/ic_share_backend.png')
	},
	{
		name:'XXXXX-004',
		uri:require('../images/ic_share_design.png')
	},
	{
		name:'XXXXX-005',
		uri:require('../images/ic_share_freebie.png')
	},
	{
		name:'XXXXX-006',
		uri:require('../images/ic_share_ios.png')
	},
	{
		name:'XXXXX-007',
		uri:require('../images/ic_share_product.png')
	}
]
export default class Home extends Component {
	constructor(props){
		super(props);
		this.state = {
			swiperShow:false,
			animated: true,
			hidden: true,//true为蕴藏
			showHideTransition: 'fade',
			routerInfo:'',
			list01:[
				{title:'电视里放的是浪费了多少浪费了',date:'2017-01-01'},
				{title:'电视里放的是浪费了多少浪费了',date:'2017-01-01'},
				{title:'电视里放的是浪费了多少浪费了',date:'2017-01-01'},
				{title:'电视里放的是浪费了多少浪费了',date:'2017-01-01'},
				{title:'电视里放的是浪费了多少浪费了',date:'2017-01-01'},
				{title:'电视里放的是浪费了多少浪费了',date:'2017-01-01'},
				{title:'电视里放的是浪费了多少浪费了',date:'2017-01-01'},
				{title:'电视里放的是浪费了多少浪费了',date:'2017-01-01'},
				{title:'电视里放的是浪费了多少浪费了',date:'2017-01-01'},
				{title:'电视里放的是浪费了多少浪费了',date:'2017-01-01'}
			]
		};
	}
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>
				<Header
					visible={false}
					navigation={this.props.navigation}
					statusBarHidden={this.state.hidden}
					headerTitle={'Home'}
				/>
				<SwiperClassic visible={this.state.swiperShow}/>
				<View style={{marginTop:10,flex:1}}>
					<ScrollView>
						{this._renderTitleUI('#007aff','List-01',false)}
						{this._renderList01UI(navigate)}
						{this._renderTitleUI('#007aff','List-02',true)}
						{this._renderList01UI(navigate)}
						{this._renderTitleUI('#007aff','List-03',true)}
						{this._renderList03UI(navigate)}
					</ScrollView>
				</View>
			</View>
		);
	}

	componentDidMount(){
		setTimeout(()=>{
			this.setState({
				swiperShow:true
			});
		},0)
		this.setState({
			routerInfo:JSON.stringify(this.props.navigation)
		})
	}

	_renderTitleUI(color,title,isTop){
		return (
			<View style={{marginTop:isTop?10:0,paddingRight:15,paddingLeft:15,paddingTop:15,paddingBottom:15,borderBottomWidth:1,borderBottomColor:'rgba(0,0,0,.05)',backgroundColor:'#fff'}}>
				<Text style={{color:color,fontSize:16}}>{title}</Text>
			</View>
		)
	}
	_renderList01UI(navigate){
		return (
			<View style={{paddingRight:15,paddingLeft:15,paddingTop:10,paddingBottom:15,flexDirection:'row',flexWrap:'wrap',backgroundColor:'#fff'}}>
				{ListImage.map((item,index)=>{
					return(
							<View key={index} style={{width:(width-62)/4,marginTop:10,marginLeft:4,marginRight:4,paddingBottom:10,justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'rgba(0,0,0,.05)'}}>
								<TouchableOpacity onPress={() => {this._onPressBack(navigate,item.name)}}>
									<Image source={item.uri} style={{width:(width-30)/6,height:(width-30)/6}}/>
									<Text numberOfLines={1} style={{color:'#999',fontSize:12}}>{item.name}</Text>
								</TouchableOpacity>
							</View>
						)
				})}
			</View>
		)
	}

	_renderList03UI(){
		return(
			<View style={{paddingRight:15,paddingLeft:15,backgroundColor:'#fff'}}>
				{
					this.state.list01.map((item,index)=>{
						return (
							<TouchableOpacity key={index} onPress={() => {this._onPressAlert(item.title)}}>
								<View style={{paddingTop:10,paddingBottom:10,flexDirection:'row',justifyContent:'center',alignItems:'center',borderBottomWidth:1,borderBottomColor:'rgba(0,0,0,.05)'}}>
									<Image source={require('../images/ic_share_link.png')} style={{width:42,height:42}} />
									<View style={[{flex:1,justifyContent:'center',marginLeft:15}]}>
										<Text numberOfLines={1} style={[styles.list03,{fontSize:14}]}>{item.title}</Text>
										<Text style={[,styles.list03,{fontSize:12}]}>{item.date}</Text>
									</View>
									<Image source={require('../images/ic_find_category.png')} style={{width:27,height:27}} />
								</View>
							</TouchableOpacity>
						)
					})
				}
			</View>
		)
	}

	_onPressBack(navigate,title){
		navigate('ListItem',{user:'Huashan',title:title})
	}

	_onPressAlert(title){
		Alert.alert(title)
	}

}

const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'rgba(0,0,0,.1)'
	},
	swiper:{
		flex:1,
		height:200
	},
	list03:{
		paddingTop:5,
		paddingBottom:5
	},
	autoHeight:{
		flex:1,
		minHeight:300,
		maxHeight:30000
	}
})
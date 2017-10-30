/**
 * Created by lihuashan on 2017/9/26.
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
import Swiper from 'react-native-swiper';
let { width, height } = Dimensions.get('window');
const IMAGEICON = [
	require('../images/1.png'),
	require('../images/2.png'),
	require('../images/3.png')
];
export default class Header extends Component {
	static propTypes = {
		statusBarHidden:PropTypes.bool,
		statusBarShowHideTransition:PropTypes.string,
		statusBarAnimated:PropTypes.bool,
		height:PropTypes.number,
		backgroundColor:PropTypes.string,
		alignItems:PropTypes.string,
		headerTitle:PropTypes.string,
		dataSoure:PropTypes.array,
		visible:PropTypes.bool // 解决swiper与navigation滑动滚动的冲突
	};
	static defaultProps = {
		statusBarAnimated: true,
		statusBarHidden: true,//true为蕴藏
		statusBarShowHideTransition: 'fade',
		height:50,
		backgroundColor:'red',
		alignItems:'center', //flex-start,flex-end
		dataSoure:IMAGEICON
	};
	constructor(props) {
		super(props);
	}
	render() {
		let {dataSoure,visible} = this.props;
		return (
			<View>
				{dataSoure.length>0&&visible?
					<View style={{height:200}}>
						<Swiper
							style={styles.swiper}          //样式
							height={200}                   //组件高度
							loop={true}                    //如果设置为false，那么滑动到最后一张时，再次滑动将不会滑到第一张图片。
							autoplay={true}                //自动轮播
							autoplayTimeout={4}                //每隔4秒切换
							horizontal={true}              //水平方向，为false可设置为竖直方向
							paginationStyle={{bottom: 5}} //小圆点的位置：距离底部10px
							showsButtons={false}           //为false时不显示控制按钮
							showsPagination={true}       //为false不显示下方圆点
							dot={<View style={{           //未选中的圆点样式
								backgroundColor: 'rgba(0,0,0,.2)',
								width: 10,
								height: 10,
								borderRadius: 5,
								marginLeft: 8,
								marginRight: 7,
								marginTop: 5,
								marginBottom: 2,
							}}/>}
							activeDot={<View style={{    //选中的圆点样式
								backgroundColor: '#007aff',
								width: 10,
								height: 10,
								borderRadius: 5,
								marginLeft: 8,
								marginRight: 7,
								marginTop: 5,
								marginBottom: 2,
							}}/>}
						>
							<Image source={IMAGEICON[0]} style={styles.img}/>
							<Image source={IMAGEICON[1]} style={styles.img}/>
							<Image source={IMAGEICON[1]} style={styles.img}/>
						</Swiper>
					</View>:
					<Image source={IMAGEICON[0]} style={styles.img}/>
				}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	img:{
		width:width,
		height:200
	}
})

/**
 * Created by lihuashan on 2017/9/27.
 */
'use strict';
import React, { Component } from 'react';
import {
	AppRegistry,
	Dimensions,
	StyleSheet,
	Text,
	Image,
	TouchableHighlight,
	TouchableOpacity,
	View,
	Platform,
	ScrollView,
	ActivityIndicator,
} from 'react-native';
import Camera from 'react-native-camera';
import ImagePicker from 'react-native-image-picker'
import { QRScannerView } from 'ac-qrcode'
let { width, height } = Dimensions.get('window');
/*
 *
 *2017.9.27 摄影功能
 *
 *
export default class CameraBox extends Component {
	constructor(props){
		super(props);
		this.state={
			cameraType:Camera.constants.Type.back,
			imagePath:''
		}
	}
	render() {
		return (
			<View style={styles.container}>
				<Camera
					ref={(cam) => {
						this.camera = cam;
					}}
					// Camera.constants.CaptureTarget.cameraRoll (default), 相册
					// Camera.constants.CaptureTarget.disk, 本地
					// Camera.constants.CaptureTarget.temp  缓存
					// 很重要的一个属性，最好不要使用默认的，使用disk或者temp，
					// 如果使用了cameraRoll，则返回的path路径为相册路径，图片没办法显示到界面上
					captureTarget={Camera.constants.CaptureTarget.temp}
					mirrorImage={false}
					//"high" (default),"medium",  "low",  "photo", "1080p",  "720p",  "480p".
					captureQuality="medium"
					style={styles.preview}
					type={this.state.cameraType}
					aspect={Camera.constants.Aspect.fill}>
					<Text style={styles.capture} onPress={this.switchCamera.bind(this)}>[切换摄像头]</Text>
					<Text style={styles.capture} onPress={this.takePicture.bind(this)}>[拍照]</Text>
					<Image source={{uri:this.state.imagePath}} style={{width:200,height:200,marginBottom: 20}} />
				</Camera>
			</View>
		);
	}

	switchCamera(){
		var state = this.state;
		if(state.cameraType === Camera.constants.Type.back) {
			state.cameraType = Camera.constants.Type.front;
		}else{
			state.cameraType = Camera.constants.Type.back;
		}
		this.setState(state);
		alert(JSON.stringify(Camera.constants));
	}

	_successCallBack(data){
		this.setState({
			imagePath:data.path
		})
		Image.getSize(data.path,(width,height) => {
			alert(JSON.stringify(width)+JSON.stringify(height));
		})

	}
	_failCallBack(err){
		alert(JSON.stringify(err));
	}
	takePicture() {
		const options = {};
		//options.location = ...
		this.camera.capture({metadata: options})
			.then((data) => this._successCallBack(data))
			.catch(err => this._failCallBack(err));
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
	},
	preview: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	capture: {
		flex: 0,
		backgroundColor: '#fff',
		borderRadius: 5,
		color: '#000',
		padding: 10,
		margin: 40
	}
});

 *
 *
 * */

/*
*
* 2017.2.28  拍照与摄影功能


export default class CameraBox extends Component {
	constructor(props) {
		super(props);

		this.camera = null;

		this.state = {
			camera: {
				aspect: Camera.constants.Aspect.fill,
				captureTarget: Camera.constants.CaptureTarget.cameraRoll,
				type: Camera.constants.Type.back,
				orientation: Camera.constants.Orientation.auto,
				flashMode: Camera.constants.FlashMode.auto,
			},
			isRecording: false
		};
	}

	takePicture = () => {
		if (this.camera) {
			this.camera.capture()
				.then((data) => console.log(data))
				.catch(err => console.error(err));
		}
	}

	startRecording = () => {
		if (this.camera) {
			this.camera.capture({mode: Camera.constants.CaptureMode.video})
				.then((data) => console.log(data))
				.catch(err => console.error(err));
			this.setState({
				isRecording: true
			});
		}
	}

	stopRecording = () => {
		if (this.camera) {
			this.camera.stopCapture();
			this.setState({
				isRecording: false
			});
		}
	}

	switchType = () => {
		let newType;
		const { back, front } = Camera.constants.Type;

		if (this.state.camera.type === back) {
			newType = front;
		} else if (this.state.camera.type === front) {
			newType = back;
		}

		this.setState({
			camera: {
				...this.state.camera,
				type: newType,
			},
		});
	}

	get typeIcon() {
		let icon;
		const { back, front } = Camera.constants.Type;

		if (this.state.camera.type === back) {
			icon = require('../images/camera/ic_camera_rear_white.png');
		} else if (this.state.camera.type === front) {
			icon = require('../images/camera/ic_camera_front_white.png');
		}

		return icon;
	}

	switchFlash = () => {
		let newFlashMode;
		const { auto, on, off } = Camera.constants.FlashMode;

		if (this.state.camera.flashMode === auto) {
			newFlashMode = on;
		} else if (this.state.camera.flashMode === on) {
			newFlashMode = off;
		} else if (this.state.camera.flashMode === off) {
			newFlashMode = auto;
		}

		this.setState({
			camera: {
				...this.state.camera,
				flashMode: newFlashMode,
			},
		});
	}

	get flashIcon() {
		let icon;
		const { auto, on, off } = Camera.constants.FlashMode;

		if (this.state.camera.flashMode === auto) {
			icon = require('../images/camera/ic_flash_auto_white.png');
		} else if (this.state.camera.flashMode === on) {
			icon = require('../images/camera/ic_flash_on_white.png');
		} else if (this.state.camera.flashMode === off) {
			icon = require('../images/camera/ic_flash_off_white.png');
		}

		return icon;
	}

	render() {
		return (
			<View style={styles.container}>
				<Camera
					ref={(cam) => {
						this.camera = cam;
					}}
					style={styles.preview}
					aspect={this.state.camera.aspect}
					captureTarget={this.state.camera.captureTarget}
					type={this.state.camera.type}
					flashMode={this.state.camera.flashMode}
					onFocusChanged={() => {}}
					onZoomChanged={() => {}}
					defaultTouchToFocus
					mirrorImage={false}
				/>
				<View style={[styles.overlay, styles.topOverlay]}>
					<TouchableOpacity
						style={styles.typeButton}
						onPress={this.switchType}
					>
						<Image
							source={this.typeIcon}
						/>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.flashButton}
						onPress={this.switchFlash}
					>
						<Image
							source={this.flashIcon}
						/>
					</TouchableOpacity>
				</View>
				<View style={[styles.overlay, styles.bottomOverlay]}>
					{
						!this.state.isRecording
						&&
						<TouchableOpacity
							style={styles.captureButton}
							onPress={this.takePicture}
						>
							<Image
								source={require('../images/camera/ic_photo_camera_36pt.png')}
							/>
						</TouchableOpacity>
						||
						null
					}
					<View style={styles.buttonsSpace} />
					{
						!this.state.isRecording
						&&
						<TouchableOpacity
							style={styles.captureButton}
							onPress={this.startRecording}
						>
							<Image
								source={require('../images/camera/ic_videocam_36pt.png')}
							/>
						</TouchableOpacity>
						||
						<TouchableOpacity
							style={styles.captureButton}
							onPress={this.stopRecording}
						>
							<Image
								source={require('../images/camera/ic_stop_36pt.png')}
							/>
						</TouchableOpacity>
					}
				</View>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	preview: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	overlay: {
		position: 'absolute',
		padding: 16,
		right: 0,
		left: 0,
		alignItems: 'center',
	},
	topOverlay: {
		top: 0,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	bottomOverlay: {
		bottom: 0,
		backgroundColor: 'rgba(0,0,0,0.4)',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	captureButton: {
		padding: 15,
		backgroundColor: 'white',
		borderRadius: 40,
	},
	typeButton: {
		padding: 5,
	},
	flashButton: {
		padding: 5,
	},
	buttonsSpace: {
		width: 10,
	},
});


 * */

/*
*
* 2017.9.29拍照与图片选择器
* */

/*const options = {
	title: '选择图片',
	cancelButtonTitle: '取消',
	takePhotoButtonTitle: '拍照',
	chooseFromLibraryButtonTitle: '图片库',
	cameraType: 'back',
	mediaType: 'photo',
	videoQuality: 'high',
	durationLimit: 10,
	maxWidth: 600,
	maxHeight: 600,
	aspectX: 2,
	aspectY: 1,
	quality: 0.8,
	angle: 0,
	allowsEditing: false,
	noData: false,
	storageOptions: {
		skipBackup: true,
		path: 'images'
	}
};*/

export default class CameraBox extends Component {
	constructor(props){
		super(props);
		this.state = {
			loading:false,
			avatarSource: null,
			videoSource: null,
			sideos:null,
			photos:null,
			visibleQR:false

		}
	}
	render() {
		return (
			<View style={styles.container}>
				<ScrollView>
				<TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
					<View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
						{
							this.state.avatarSource === null ? <Text>选择图片</Text> :
							<Image style={styles.avatar} source={this.state.avatarSource} />
						}
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={this.selectVideoTapped.bind(this)}>
					<View style={[styles.avatar, styles.avatarContainer]}>
						<Text>选择视频</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={this.selectQRScanner.bind(this)}>
					<View style={[styles.avatar, styles.avatarContainer]}>
						<Text>扫描二维码</Text>
					</View>
				</TouchableOpacity>
				{
					this.state.videoSource &&
					<Text style={{margin: 8, textAlign: 'center'}}>{this.state.videoSource}</Text>
				}
				{
					this.state.photos &&
					<Text style={{margin: 8, textAlign: 'center'}}>{this.state.photos}</Text>
				}
				{
					this.state.sideos &&
					<Text style={{margin: 8, textAlign: 'center'}}>{this.state.sideos}</Text>
				}
				</ScrollView>
				{this.state.visibleQR?<View style={{position:'absolute',top:0,left:0,width:width,height:height,zIndex:99,backgroundColor:'rgba(0,0,0,.1)'}}>
					<QRScannerView
						onScanResultReceived={this.barcodeReceived.bind(this)}
						renderTopBarView={() => this._renderTitleBar()}
						renderBottomMenuView={() => this._renderMenu()}
					/>
				</View>:null}
			</View>
		);
	}

	selectQRScanner(){
		this.setState({
			visibleQR:true
		})
	}

	_renderTitleBar(){
		return(
			<Text
				style={{color:'white',textAlignVertical:'center', textAlign:'center',font:20,padding:12}}
			>Here is title bar</Text>
		);
	}

	_renderMenu() {
		return (
			<Text
				style={{color:'white',textAlignVertical:'center', textAlign:'center',font:20,padding:12}}
			>Here is bottom menu</Text>
		)
	}

	barcodeReceived(e) {
		this.setState({
			visibleQR:false
		})
		alert('Type: ' + e.type + '\nData: ' + e.data);
		//console.log(e)
	}


	selectPhotoTapped() {
		const options = {
			title: '选择图片',
			cancelButtonTitle: '取消',
			takePhotoButtonTitle: '拍照',
			chooseFromLibraryButtonTitle: '图片库',
			cameraType: 'back',
			mediaType: 'photo',
			videoQuality: 'high',
			durationLimit: 10,
			maxWidth: 500,
			maxHeight: 500,
			aspectX: 2,
			aspectY: 1,
			quality: 1,
			angle: 0,
			allowsEditing: false,
			noData: false,
			storageOptions: {
				skipBackup: true,
				path: 'images'
			}
		};
		ImagePicker.showImagePicker(options, (response) => {
			console.log('Response = ', response);
			if (response.didCancel) {
				this.setState({
					photos:JSON.stringify(response)
				})
				console.log('User cancelled photo picker');
			}
			else if (response.error) {
				console.log('ImagePicker Error: ', response.error);
			}
			else if (response.customButton) {
				console.log('User tapped custom button: ', response.customButton);
			}
			else {
				let source = { uri: response.uri };
				// You can also display the image using data:
				// let source = { uri: 'data:image/jpeg;base64,' + response.data };
				this.setState({
					avatarSource: source
				});
			}
		});
	}

	selectVideoTapped() {
		const options = {
			title: 'Video Picker',
			takePhotoButtonTitle: 'Take Video...',
			mediaType: 'video',
			videoQuality: 'medium'
		};

		ImagePicker.showImagePicker(options, (response) => {
			console.log('Response = ', response);
			if (response.didCancel) {
				this.setState({
					sideos:JSON.stringify(response)
				})
				console.log('User cancelled video picker');
			}
			else if (response.error) {
				console.log('ImagePicker Error: ', response.error);
			}
			else if (response.customButton) {
				console.log('User tapped custom button: ', response.customButton);
			}
			else {
				this.setState({
					videoSource: response.uri
				});
			}
		});
	}

	showImagePicker() {
		ImagePicker.showImagePicker(options, (response) => {
			if (response.didCancel) {
				console.log('User cancelled image picker');
			}
			else if (response.error) {
				console.log('ImagePicker Error: ', response.error);
			}
			else {
				let source;
				if (Platform.OS === 'android') {
					source = {uri: response.uri, isStatic: true}
				} else {
					source = {uri: response.uri.replace('file://', ''), isStatic: true}
				}
				let file;
				if(Platform.OS === 'android'){
					file = response.uri
				}else {
					file = response.uri.replace('file://', '')
				}
				this.setState({
					loading:true
				});
				this.props.onFileUpload(file,response.fileName||'未命名文件.jpg')
					.then(result=>{
						this.setState({
							loading:false
						})
					})
			}
		});
	}
}
const styles = StyleSheet.create({
	cameraBtn: {
		padding:5
	},
	count:{
		color:'#fff',
		fontSize:12
	},
	fullBtn:{
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'#fff'
	},
	countBox:{
		position:'absolute',
		right:-5,
		top:-5,
		alignItems:'center',
		backgroundColor:'#34A853',
		width:16,
		height:16,
		borderRadius:8,
		justifyContent:'center'
	},


	container: {

		flex: 1,

		justifyContent: 'center',

		alignItems: 'center',

		backgroundColor: '#F5FCFF'

	},

	avatarContainer: {

		borderColor: '#9B9B9B',

		borderWidth: 1,

		justifyContent: 'center',

		alignItems: 'center'

	},

	avatar: {

		borderRadius: 75,

		width: 150,

		height: 150

	}

});

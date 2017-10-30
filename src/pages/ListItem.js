/**
 * Created by lihuashan on 2017/9/25.
 */
import React, { Component } from 'react';
import {
	StyleSheet,
	ScrollView,
	Text,
	View
} from 'react-native';
import Header from '../components/Header'
export default class Home extends Component {
	static navigationOptions = {
		headerTitle:'ListItem',
		headerBackTitle:'back'
	}
	constructor(props){
		super(props);
		this.state = {
			routerInfo:''
		}
	}
	render() {
		return (
			<View>
				<Header
					visible={true}
					navigation={this.props.navigation}
					statusBarHidden={true}
					headerTitle={this.props.navigation.state.params.title?this.props.navigation.state.params.title:'SSSSS'}
				/>
				<ScrollView>
					<View>
						<Text>
							{this.state.routerInfo}
						</Text>
					</View>
					<View>
						<Text>
							WWWWWWWWWWWWRRRRRRRRRRRRRR
						</Text>
					</View>
					<View>
						<Text>
							WWWWWWWWWWWWRRRRRRRRRRRRRR
						</Text>
					</View>
					<View>
						<Text>
							WWWWWWWWWWWWRRRRRRRRRRRRRR
						</Text>
					</View>
					<View>
						<Text>
							WWWWWWWWWWWWRRRRRRRRRRRRRR
						</Text>
					</View>
					<View>
						<Text>
							WWWWWWWWWWWWRRRRRRRRRRRRRR
						</Text>
					</View>
				</ScrollView>
			</View>
		);
	}

	componentDidMount(){
		this.setState({
			routerInfo:JSON.stringify(this.props.navigation)
		})
	}
}
import React, { Component } from 'react'; 
import {StyleSheet, AppRegistry, ScrollView, Image, Text,Alert,View,ActivityIndicator} from 'react-native';

export default class Logo extends Component{

	constructor(props){


		super(props)

	}

	componentDidMount(){

		

		setTimeout(
			()=>{

				this.props.cambiarEstado('ini')
			},

			5000

		)
	}



	render(){


		return(

			<View  style={{width:'100%',height:'100%', display:'flex',justifyContent:'center',alignItems:'center'}}>

				<Image style={{width:'50%',height:'25%',marginBottom:20}} source={require('./assets/icon.png')}></Image>
				<ActivityIndicator size='large' color='#0000ff'/>
			</View>
		)
	}


}
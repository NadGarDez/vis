import React, { Component } from 'react';
import {StyleSheet, AppRegistry, ScrollView, Image, Text,Alert,View,TouchableOpacity,ActivityIndicator, Platform} from 'react-native';
import {requestTrackingPermissionsAsync} from "expo-tracking-transparency";
import { WebView } from 'react-native-webview';

import E from "./error.js"
import N from "./noGranted.js"


export default class Ini extends Component{

	constructor(props){

		super(props)
		this.centro = this.centro.bind(this)
		this.recargar = this.recargar.bind(this)
		this.state={
			webv:"hidden",
			view:'ini',
			e:false,
			'secciones':{
				'ini':{src:"https:\//www.visitezitalie.fr/"},
				'boton1':{src:'https:\//www.visitezitalie.fr/'},
				'boton2':{src:'https:\//www.visitezitalie.fr/add-listing/'},
				'boton3':{src:'https:\//www.visitezitalie.fr/contact/'},


			}
		}
		console.log(this.state.e)

	}

	recargar(){
		this.state.error = false
		this.forceUpdate()
	}

	centro(){

	}
	render(){

		let rec = this.recargar

		console.log(rec)

		let B = async ()=>{

			let conponent = ""
			/*

			if(Platform.OS == "ios"){
				/*const { status } = await requestTrackingPermissionsAsync();

				if (status == "granted"){

					if(this.state.e == false){
						console.log(this.state)

						component = (
								<WebView source={{ uri: this.state.secciones[this.state.view].src }} style={{ marginTop: 20, width:'100%',height:'90%' }}
									onError={
										(e)=>{
											//this.state.error = true
											console.log("error ${e}")
											this.setState({e:true})
										}
									}
									onLoad={(syntheticEvent) => {
							    const { nativeEvent } = syntheticEvent;
							    console.log(nativeEvent.url)
								//	this.setState({webv:"visible"})
							  }}
								/>
						)


					}
					else{
						component=(
								<E recargar={rec}/>
						)
					}

				}
				else{
					component = (
						<N recargar={rec} />
					)
				}
			}
			else {/*
				let component=""
				if(this.state.e == false){
					console.log(this.state)

					component = (
							<WebView source={{ uri: this.state.secciones[this.state.view].src }} style={{ marginTop: 20, width:'100%',height:'90%' }}
								onError={
									(e)=>{
										//this.state.error = true
										console.log("error ${e}")
										this.setState({e:true})
									}
								}
								onLoad={(syntheticEvent) => {
						    const { nativeEvent } = syntheticEvent;
						    console.log(nativeEvent.url)
							//	this.setState({webv:"visible"})
						  }}
							/>
					)
				}

			}*/
			component = (
				<N/>
			)


			return component

		}


		const A = ()=>{
			let component = ""
			if(Platform.OS == "ios"){
				requestTrackingPermissionsAsync()
				.then(
					(res)=>{
						console.log(res)
						if(res.status == "granted"){
							if(this.state.e == false){
								console.log(this.state)

								component = (
										<WebView source={{ uri: this.state.secciones[this.state.view].src }} style={{ marginTop: 20, width:'100%',height:'90%' }}
											onError={
												(e)=>{
													//this.state.error = true
													console.log("error ${e}")
													this.setState({e:true})
												}
											}
											onLoad={(syntheticEvent) => {
									    const { nativeEvent } = syntheticEvent;
									    console.log(nativeEvent.url)
										//	this.setState({webv:"visible"})
									  }}
										/>
								)
							}
							else{
								component=(
										<E recargar={rec}/>
								)
							}
						}
						else{
							component = (
								<N recargar={rec} />
							)
						}
					}
				)
				.catch(
					(err)=>{
							console.log(res)
					}
				)
			}
			else{
				if(this.state.e == false){
					console.log(this.state)

					component = (
							<WebView source={{ uri: this.state.secciones[this.state.view].src }} style={{ marginTop: 20, width:'100%',height:'90%' }}
								onError={
									(e)=>{
										//this.state.error = true
										console.log("error ${e}")
										this.setState({e:true})
									}
								}
								onLoad={(syntheticEvent) => {
						    const { nativeEvent } = syntheticEvent;
						    console.log(nativeEvent.url)
							//	this.setState({webv:"visible"})
						  }}
							/>
					)
				}
				else{
					component=(
							<E recargar={rec}/>
					)
				}
			}




			return component
		}

		return(

			<View style={{width:'100%',height:'100%',padding:0,margin:0}}>
				<A/>

				<View style={{ width:'100%',height:'10%',backgroundColor:'rgba(52, 52, 52, alpha)',display:'flex',justifyContent:'center',flexDirection:'row'}}>

					<TouchableOpacity  style={{width:'33%',height:'100%'}}
						onPress={

							()=>{

								this.state.view="boton1";

								this.forceUpdate()

							}
						}

					>
                      <View style={{display:'flex',justifyContent:'center',alignItems:'center', width:'100%', color:'white',height:'100%',opacity:1}}>

                      	<Image source={require('./assets/accueil.png')} style={{width:50,height:50}}>



                      	</Image>

                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:'33%',height:'100%'}}

                    	onPress={

							()=>{

								this.state.view="boton2";

								this.forceUpdate()

							}
						}

                    >

                    	<View style={{ display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'100%',color:'white',backgroundColor:'white'}}>
                       		<Image source={require('./assets/adherer.png')} style={{width:50,height:50}}>



                      		</Image>
                      	</View>

                    </TouchableOpacity>
                    <TouchableOpacity style={{width:'33%',height:'100%'}}

                    	onPress={

							()=>{

								this.state.view="boton3";

								this.forceUpdate()

							}
						}

                    >

                    	<View style={{ display:'flex',justifyContent:'center',alignItems:'center',width:'100%',color:'white',height:'100%',backgroundColor:'white'}}>
                       		<Image source={require('./assets/Contact.png')} style={{width:50,height:50}}>



                      		</Image>
                      	</View>

                    </TouchableOpacity>
				</View>

			</View>

		)

	}


}

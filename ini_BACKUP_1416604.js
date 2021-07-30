import React, { Component, useState,useEffect} from 'react';
import {StyleSheet, AppRegistry, ScrollView, Image, Text,Alert,View,TouchableOpacity,ActivityIndicator, Platform} from 'react-native';
import {requestTrackingPermissionsAsync} from "expo-tracking-transparency";
import { WebView } from 'react-native-webview';

import E from "./error.js"
import N from "./noGranted.js"

const H = (props)=>{
	const [grant,setGrant] = useState(false)
	const [,reload] = useState()
<<<<<<< HEAD
	useEffect(
		()=>{
			(
				async ()=>{
					if(grant==false ){
						const {status} = await requestTrackingPermissionsAsync()
						console.log(status, "status<--")
						if(status === "granted"){
							setGrant(true)
						}
=======
	
	const cerox = ()=>{
		(
			async ()=>{


					const {status} = await requestTrackingPermissionsAsync()
					if(status === "granted"){
						setGrant(true)
>>>>>>> e1afea9a15022ece27d15dde76d82bf4b2defa83
					}


			}
		)()
	}
	cerox()
	let i = ""

	if(grant == true){
		i = (<Ini granted={grant}/>)
	}
	else{
		i = (
			<N recargar={props.cambiarEstado}/>
		)
	}

	return (
		<>
			{
				i
			}
		</>
	)

}



class Ini extends Component{

	constructor(props){

		super(props)
		this.recargar = this.recargar.bind(this)
		this.state={
			granted:false,
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


	render(){

		let rec = this.recargar

		const A = ()=>{

				let element = ""
				if(this.state.e == false){
					console.log(this.state)


					element = (
							<WebView source={{ uri: this.state.secciones[this.state.view].src }} style={{ marginTop: 20, width:'100%',height:'90%' }}
								onError={
									(e)=>{
										console.log("error ${e}")
										this.setState({e:true})
									}
								}
								onLoad={(syntheticEvent) => {
						    const { nativeEvent } = syntheticEvent;
						    console.log(nativeEvent.url)

						  }}
							/>
					)
				}
				else{
					element=(
							<E recargar={rec}/>
					)
				}



			return element
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

export default H

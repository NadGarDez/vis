import React, { Component } from 'react';
import {StyleSheet, AppRegistry, ScrollView, Image, Text,Alert,View,TouchableOpacity,Button} from 'react-native';
import { WebView } from 'react-native-webview';


export default class Ini extends Component{

	constructor(props){

		super(props)
    console.log(this)



	}

	render(){

	//	console.log(this.state.secciones[this.state.view].src)

		return(

			<View style={{width:"100%", height:"90%",display:"flex", justifyContent:"center", alignItems:"center",flexDirection:"column"}}>

        <Text style={{marginBottom:5, fontSize:20}}>
          Avertissement d'autorisation
        </Text>
        <Text  style={{marginBottom:5}}>
          Autorisation de transparence de suivi non accordée
        </Text>
        <Button
          title="Recargar"
          color="red"
          onPress={
            ()=>{
              this.props.recargar("logo")
            }
          }

        />
      </View>

		)

	}


}

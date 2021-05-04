import React, { Component } from 'react'; 
import {StyleSheet, AppRegistry, ScrollView, Image, Text,Alert,View} from 'react-native';
import Logo from './logo.js';
import Ini from './ini.js';

export default class Content extends Component{

	constructor(props){

		super(props);

		this.state ={

			pag:'logo'
		}

		this.cambiarEstado = this.cambiarEstado.bind(this)
	}


	cambiarEstado(pag){

		this.state.pag = pag;

		this.forceUpdate();

	}

	render(){


		switch(this.state.pag){


			case 'logo':

				return(
					<Logo cambiarEstado={this.cambiarEstado} />

				)

			break;

			case 'ini':

				return(
					<Ini />

				)

			break;

		}




	}

}
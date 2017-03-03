import React, {Component} from 'react';
import axios from 'axios';
import CardFeed from './CardFeed';


export default class Feed extends Component{
	constructor(){
		super();
		this.state ={
			lista: []
		};
		this.location = [];
		this.keyword = '';
		this.radius = 200;

	}
	
	componentDidMount(){
		   if (navigator.geolocation) {
        		navigator.geolocation.getCurrentPosition((position)=>{
					this.location = [position.coords.latitude, position.coords.longitude];
					this.radius/=6371;
					let find={
						location: this.location,
						radius: this.radius,
						keyword: this.keyword
					}
	
					axios.post('https://nuflow.herokuapp.com/search/places', find).then((result)=>{
					// axios.post('http://localhost:3001/search/places', find).then((result)=>{
						this.setState({lista: result.data});
							console.log(result.data);
						}).catch((err)=>{
							alert(err);
						});
				});
    		} else { 
        		alert("Geolocation is not supported by this browser.");
    		}
	}

	render(){
		return(
			<CardFeed places={this.state.lista}/>
		)
	}
}
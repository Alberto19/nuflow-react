import React, {Component} from 'react';
// import service from '../services/service';
import axios from 'axios';
import {Grid, Cell, IconButton} from 'react-mdl';


export default class Feed extends Component{
	constructor(){
		super();
		this.state ={
			lista: []
		};
		this.location = [];
		this.keyword = '';
		this.radius = 900;

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
		<Grid className="section--center">
			<Cell  offsetDesktop={3} col={6} offsetTablet={1} tablet={6} phone={5} >
				<Grid shadow={2} style={{padding: '0px', height: '200px'}}>
					<Cell col={5}  tablet={3} phone={2}>
						<img alt="Nova itapevi" src="https://lh5.googleusercontent.com/-3NGDhv1L-eM/Vp7HaekAjiI/AAAAAAAAAAM/gQNvaq27n8IzCa0XsyCJdWtgxdjz43zlwCJkC/s1600-w2000-h2000/"  style={{ height: '100%', width: '100%' }} />
					</Cell>
					<Cell col={7}  tablet={5} phone={2}>
					<Grid style={{padding: '0px', height: '200px'}}>
						<Cell col={10}  tablet={5} phone={3}>
						<p style={{fontSize:'23px', fontWeight:'600',  color:'rgb(33,150,243)', textAlign: 'center' }}>Celeiro da Granja</p>
						</Cell>
					<Cell col={2}  tablet={3} phone={1}>
						<IconButton name="share" />
					</Cell>
					</Grid>
					</Cell>
				</Grid>

			</Cell>
		</Grid>

		)
	}
}
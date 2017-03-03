import React, {Component} from 'react';
import {Grid, Cell, IconButton} from 'react-mdl';

export default class CardFeed extends Component{

	render(){

		return(
			<div>{this.props.places.map(place =>{
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
						<p style={{fontSize:'23px', fontWeight:'600',  color:'rgb(33,150,243)', textAlign: 'center' }}>{place.name}</p>
						</Cell>
					<Cell col={2}  tablet={3} phone={1}>
						<IconButton name="share" />
					</Cell>
					</Grid>
					</Cell>
				</Grid>

			</Cell>
		</Grid>);
		})}
		</div>
		);
	}


}
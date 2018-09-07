import React from 'React';
import React, {Component} from 'React';
import {text} from 'React-native';

class Judul extends React.Component{
	render(){
		return(
			<text style={style.judul}>
			{this.props.title}</text>
		)
	}
}
const style = {
	judul:{
		color: '#f00',
		fontSize: 50,
		backgroundColor: '#fff'	
	}
}
export default Judul;
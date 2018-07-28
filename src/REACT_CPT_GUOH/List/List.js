import React, {Component} from 'react';
import './List.css';
import analysis from '../A_common/analysis.js'

class List extends Component{
	render(){
		analysis.call(this)
		return(
			<div className="list">
				{this.child}
			</div>
		)
	}
}

List.defaultProps = {
	tab:"",
	Crumbs:"",
	Title:{},
	Table:"",
	Search:null,
	BtnNew:null,
	BtnMore:null,
	SimpleBlock:null,
	Block:null,
	Calendar:null,
	Chart:null
}

export default List;
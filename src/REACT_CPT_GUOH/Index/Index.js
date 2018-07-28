import React, {Component} from 'react';
import './Index.css';
import analysis from '../A_common/analysis.js'

class Index extends Component{
	render(){
		analysis.call(this)
		return(
			<div className="index">
				{this.child}
			</div>
		)
	}
}

Index.defaultProps = {
	tab:"",
	Crumbs:"",
	Title:{},
	Search:null,
	BtnNew:null,
	BtnMore:null,
	SimpleBlock:null,
	Block:null,
	Calendar:null,
	Chart:null,
	Table:null
}

export default Index;
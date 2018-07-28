import React, {Component} from 'react';
import './Detail.css';
import analysis from '../A_common/analysis.js'

class Detail extends Component{
	render(){
		analysis.call(this)
		return(
			<div className="detail">
				{this.child}
			</div>
		)
	}
}

Detail.defaultProps = {
	tab:"",
	Crumbs:"",
	Title:"",
	Information:null,
	Table:null,
	Search:null,
	BtnNew:null,
	BtnMore:null,
	SimpleBlock:null,
	Block:null,
	Calendar:null,
	Chart:null
}

export default Detail;
import React, {Component} from 'react';	
import './Content.css';
import analysis from '../A_common/analysis.js'

class Content extends Component{
	render(){
		analysis.call(this)
		return(
			<div className="content flex-item">
			{this.child}
			</div>
		)
	}
}

export default Content;
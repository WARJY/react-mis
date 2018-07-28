import React, {Component} from 'react';
import './New.css';
import emitter from '../A_common/emitter.js'
import analysis from '../A_common/analysis.js'

class New extends Component{
	state = {
		show:false
	}
	
	componentWillMount(){
		let that = this;
		emitter.on("TONEW",function(){
			that.setState({
				show:true
			})
		})
		emitter.on("HIDENEW",function(){
			that.setState({
				show:false
			})
		})
	}
	
	render(){
		analysis.call(this)
		return(
			<div className="new" style={{top:this.state.show?"0":"-200%"}}>
				{this.child}
			</div>
		)
	}
}

export default New;
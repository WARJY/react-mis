import React, {
	Component
} from 'react';
import './Information.css';
import emitter from '../A_common/emitter.js'

class Information extends Component {
	state = {}
	
	componentWillMount() {
		let that = this;
		emitter.on("toDetail",function(item){
			that.setState(item)
		})
	}

	render() {
		let that = this;
		return(
			<div className="flex information">
                	<div className="flex-item img-head-l w120">
                		<img src={require('./project.png')}></img>
                		<div className="g-btn g-btn-rounder w100">
                			<a>编辑</a>
                		</div>
                	</div>
                	<div className="flex-item flex4 pl20">
                		<h1 className="f20">{this.state.name}</h1>
                		{
                			that.props.info.map(function(item){
                				return <span key={item.title}>{item.title}:{that.state[item.field]}</span>
                			})
                		}
                	</div>
               </div>
		)
	}
}

export default Information;
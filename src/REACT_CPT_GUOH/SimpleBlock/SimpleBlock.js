import React, {
	Component
} from 'react';
import './SimpleBlock.css';
import Invoker from '../A_common/invoker.js'

class SimpleBlock extends Component {
	state = {
	}
	
	componentWillMount(){
		this.props.handleLoad.call(this)
	}
	
	componentWillReceiveProps(nextProps){
		nextProps.handleLoad.call(this)
	}
	
	render() {
		let that = this;
		return(
			<div className="flex">
				{
					this.props.BlockItem.map(function(item){
						return 	<div className="flex-item" key={item.text}>
									<div className="simple-block-box num-text text-center">
										<h1>{that.state[item.field]}<b className="f20">{item.unit}</b></h1>
										<p>{item.text}</p>
									</div>
								</div>
					})
				}
			</div>
		)
	}
}

SimpleBlock.defaultProps = {
	
}

export default SimpleBlock;
import React, {
	Component
} from 'react';
import './BtnNew.css';
import emitter from '../A_common/emitter.js'
import analysis from '../A_common/analysis.js'

class BtnNew extends Component {
	handleClick(){
		emitter.emit("TONEW")
	}
	
	render() {
		return(
			<div className="flex-item text-right w300">
                        <div className="search-bar">
                            <a className="search-bar-btn" onClick={this.handleClick.bind(this)}>{this.props.title}</a>
                        </div>
                    </div>
		)
	}
}

export default BtnNew;
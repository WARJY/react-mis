import React, {
	Component
} from 'react';
import './BtnMore.css';
import emitter from '../A_common/emitter.js'
import analysis from '../A_common/analysis.js'

class BtnMore extends Component {
	handleClick(){
		emitter.emit("TOLIST")
	}
	
	render() {
		return(
			<div class="flex-item text-right w300">
                <div className="search-bar">
                    <a className="search-bar-btn" onClick={this.handleClick.bind(this)}>{this.props.title}</a>
                </div>
            </div>
		)
	}
}

export default BtnMore;
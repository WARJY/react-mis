import React, {
	Component
} from 'react';
import './Pages.css';
import emitter from '../A_common/emitter.js'
import analysis from '../A_common/analysis.js'

class Pages extends Component {
	componentWillMount() {
		let that = this;
		this.state = {
			tab: "首页"
		}
		emitter.on("TAB", function(para) {
			that.setState({
				tab: para.title
			})
		})
	}

	render() {
		analysis.call(this)
		return(
			<div className="page-view">
				{this.child}
			</div>
		)
	}
}

export default Pages;
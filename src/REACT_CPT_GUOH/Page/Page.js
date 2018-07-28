import React, {
	Component
} from 'react';
import $ from 'jquery'
import './Page.css';
import emitter from '../A_common/emitter.js'
import analysis from '../A_common/analysis.js'

class Page extends Component {
	componentWillMount() {
		let that = this;
		emitter.on("TOINDEX", function() {
			that.setState({
				view: 0
			})
		})
		emitter.on("TOLIST", function() {
			that.setState({
				view: 1
			})
		})
		emitter.on("TODETAIL", function() {
			that.setState({
				view: 2
			})
		})
		emitter.on("search", function(para) {
			that.setState({
				view: 1
			})
		})

		this.setState({
			view: 0
		})
	}
	
	render() {
		analysis.call(this);
		return(
			<div className="page-box flex" style={{left:"-" + (this.state.view*100) + "%"}}>
				{this.child}
			</div>
		)
	}
}

Page.defaultProps = {
	tab: "",
	Index: "",
	List: null,
	Detail: null,
	New: null
}

export default Page;
import React, {
	Component
} from 'react';
import './Madel.css';
import Form from '../Form/Form.js';
import emitter from '../A_common/emitter.js'
import analysis from '../A_common/analysis.js'

class Madel extends Component {
	MadelClick(event){
		event.stopPropagation();
	}
	
	render() {
		return(
			<div className="page-madel" style={{display: this.props.switch === true?"block":"none"}}>
				<div className="madel-mask">
				</div>
				<div className="madel-box"  onClick={this.MadelClick.bind(this)}>
					<div className="madel-hd p20">
						<h1 className="f16">{this.props.title}</h1>
					</div>
					<Form 	field={this.props.Form.field}
							input={this.props.Form.input}
							submit={this.props.Form.submit}
							handleSubmit={this.props.Form.handleSubmit}>
					</Form>
				</div>
			</div>
		)
	}
}

export default Madel;
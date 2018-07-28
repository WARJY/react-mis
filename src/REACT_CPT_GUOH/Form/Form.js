import React, {
	Component
} from 'react';
import './Form.css';
import analysis from '../A_common/analysis.js'
import emitter from '../A_common/emitter.js'
import $ from 'jquery'

class Form extends Component {
	state = {
		input:this.props.field,
		img:require('./project.png'),
		edit:false
	}
	
	componentWillMount(){
		let that = this;
		emitter.on("toNew",function(item,todo){
			console.log(item)
			that.setState({
				input:$.extend(that.props.field, item),
				edit:true
			})
		})
	}
	
	handleSubmit(){
		this.props.handleSubmit(this.state.input);
	}
	
	handleChange(item,event){
		let that = this;
		switch(item.type){
			case "text":
				this.state.input[item.field] = event.target.value;
				break;
			case "radio":
				this.state.input[item.field] = event.target.value;
				break;
			case "check":
				this.state.input[item.field] = event.target.value;
				break;
			case "checks":
				this.state.input[item.field].push(event.target.value)
				break;
			case "select":
				this.state.input[item.field] = event.target.value;
				break;
			case "img":
				this.state.input[item.field] = event.target.files[0];
    			let reader = new FileReader();
    			let src = "";
    			reader.onload = function(e){
    				that.setState({
    					img:e.target.result
    				})
    			}
    			reader.readAsDataURL(event.target.files[0]);
				break;
			default:
				break;
		}
	}
	
	render() {
		let that = this;
		return(
			<div className="flex form">
						<form className="ng-pristine ng-valid">
						{
							this.props.input.map(function(item){
								switch(item.type){
									case "img":
										return 	<div key={item.type} className="form-item flex">
						                			<label className="flex-item w100 text-left">头像</label>
						                			<div className="form-item img-head-m square">
							                			<img src={that.state.img}></img>
							                			<input ref className="btn-file" type="file" accept="image/gif, image/jpeg, image/png, image/jeg" onChange={that.handleChange.bind(that,item)} value={that.state[item.field]}/>
						                			</div>
						                		</div>
										break;
									case "text":
										return 	<div key={item.type} className="form-item flex">
						                			<label className="flex-item w100 text-left">经纪人</label>
						                			<div className="flex-item">
							                			<input type="text" onChange={that.handleChange.bind(that,item)} value={that.state[item.field]}/>
						                			</div>
						                		</div>
										break;
									case "radio":
										return 	<div key={item.type} className="form-item flex">
						                			<label className="flex-item w100 text-left">是否启用</label>
						                			<div className="flex-item input-box">
						                				<div className="flex">
						                					<div className="flex-item">
						                						<input type="radio" className="flex-item" name="on" value="on" onChange={that.handleChange.bind(that,item)}/>{item.value[0]}
						                					</div>
						                					<div className="flex-item">
						                						<input type="radio" className="flex-item" name="on" value="off" onChange={that.handleChange.bind(that,item)}/>{item.value[1]}
						                					</div>
						                				</div>
						                			</div>
						                		</div>
										break;
									case "checks":
										let checks = item.handleLoad();
										return 	<div key={item.type} className="form-item flex">
						                			<label className="flex-item w100">负责权证</label>
						                			<div className="flex-item input-box">
						                				{
						                					checks.map(function(item2){
						                						return 	<div key={item2} style={{display:"inline"}}>
						                								<input type="checkbox" name="emm" value={item2} onChange={that.handleChange.bind(that,item)}/>
						                								{item2}</div>
						                					})
						                				}
						                			</div>
						                		</div>
										break;
									case "check":
										return 	<div key={item.type} className="form-item flex">
						                			<label className="flex-item w100 text-left">店长身份</label>
						                			<div className="flex-item input-box">
						                				<input type="checkbox" onChange={that.handleChange.bind(that,item)} value="on"/>设置为店长
						                			</div>
						                		</div>
						                break;
						            case "select":
						            	let options = item.handleLoad();
						            	return 	<div key={item.type} className="form-item flex">
						                			<label className="flex-item w100 text-right">所属门店</label>
						                			<div className="flex-item">
							                			<select onChange={that.handleChange.bind(that,item)}>
								                			{
							                					options.map(function(item2){
							                						return 	<option key={item2} value={item2}>{item2}</option>
							                					})
							                				}
							                			</select>
						                			</div>
						                		</div>
						                break;
						            default:
						            	break;
								}
							})
						}
						<div className="form-item flex">
		                		<label className="flex-item w100"></label>
		                			<div className="flex-item">
		                				<a className="btn-default btn-blue" onClick={this.handleSubmit.bind(this)}>确认提交</a>
		                			</div>
		                		</div>
		                </form>
                	</div>
		)
	}
}

export default Form;
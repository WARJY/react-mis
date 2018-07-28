import React, {
	Component
} from 'react';
import './Block.css';
import emitter from "../A_common/emitter.js"
import analysis from "../A_common/analysis.js"

class Block extends Component {
	componentWillMount(){
		this.props.handleLoad.call(this);
	}
	
	handleMore(){
		emitter.emit("TOLIST");
	}
	
	componentWillReceiveProps(nextProps){
		nextProps.handleLoad.call(this)
	}
	
	render() {
		let that = this;
		let index = -1;
		return  (
			<div className="flex block">
				{
					this.props.BlockItem.map(function(item){
						index += 1;
						return 	<div className="flex-item w400" key={index}>
		                            <div className="block-box">
		                                    <div className="block-title flex">
		                                        <h1 className="flex-item lh3 f16">{item.title.h1.title}:{that.state.data[index].title[item.title.h1.field]}</h1>
		                                        <span className="flex-item text-right">
		                                        	{item.title.h2.title}<strong className="f22">{that.state.data[index].title[item.title.h2.field]}</strong>
		                                        </span>
		                                        <span className="flex-item text-right">
		                                        	{item.title.h3.title}<strong className="f22">{that.state.data[index].title[item.title.h3.field]}</strong>
		                                        </span>
		                                    </div>
		                                    <div className="block-content">
		                                        <h1 className="block-content-title">{that.state.data[index].content[item.content.h1.field]}</h1>
		                                        {item.content.h2?<p className="f16">{item.content.h2.title}:{that.state.data[index].content[item.content.h2.field]}</p>:""}
		                                        {item.content.h3?<p className="f12">{item.content.h3.title}:{that.state.data[index].content[item.content.h3.field]}</p>:""}
		                                        {item.content.img?<div className="block-img m10"><img src={require("./project.png")}></img></div>:""}
		                                    </div>
		                            </div>
		                        </div>
					})
				}
				<div className="flex-item w400 block-more"  onClick={this.handleMore.bind(this)}>
                    <div className="block-box">
                        <a>查看更多</a>
                    </div>
                </div>
			</div>
		)
	}
}

export default Block;
import React, {
	Component
} from 'react';
import emitter from '../A_common/emitter.js'
import Search from '../Search/Search.js';
import Madel from '../Madel/Madel.js';
import './Table.css';

class Table extends Component {
	state={
		tab:"all",
		pages:1,
		data:[]
	}
	
	componentWillMount() {
		this.props.handleLoad.call(this,1,"all");
		let that = this;
		
		emitter.on("search", function(para) {
			that.props.handleLoad.call(that,1,"all",para);
		})
		emitter.on("toList", function(para) {
			that.props.handleLoad.call(that,1,"all");
		})
	}
	
	componentWillReceiveProps(nextProps){
		nextProps.handleLoad.call(this,1,"all")
	}
	
	handleTab(tab){
		this.props.handleLoad.call(this,1,tab);
	}
	
	handleOperation(para){
		let todo = para[0];
		let item = para[1];
		console.log(para)
		switch(todo){
			case "查看":
				emitter.emit("TODETAIL",item)
				emitter.emit("toDetail",item)
				break;
			case "编辑":
				emitter.emit("TONEW",item)
				emitter.emit("toNew",item)
				break;
			default:
				break;
		}
	}
	
	handleMadel(){
		this.setState({
			madel:!this.state.madel
		})
	}
	
	handleBefore(){
		this.props.handleLoad.call(this,this.state.page - 1>0?this.state.page - 1:1,this.state.tab);
	}
	
	handleAfter(){
		this.props.handleLoad.call(this,this.state.page + 1<=this.state.pages?this.state.page + 1:this.state.pages,this.state.tab);
	}
	
	handlePage(page){
		console.log(page)
		this.props.handleLoad.call(this,page,this.state.tab);
	}
	
	render() {
		let that = this;
		return(
			<div className="table-box">
               	<div className="flex table-tab">
               		{
               			this.props.tab.map(function(item){
               				return 	<a key={item.field} className={that.state.tab===item.field?"active flex-item":"flex-item"} onClick={that.handleTab.bind(that,item.field)}>
										{item.title}
									</a>
               			})
               		}
               		<div className="tab-search text-right">
               			<Search></Search>
               		</div>
               	</div>
               	<div className="table">
               		<div className="table-hd">
	               		<div className="flex text-left">
		               		{
								this.props.head.map(function(item){
									return 	<div className="flex-item" key={item.title}>
					                           <span>{item.title}</span>
					                        </div>
								})
							}
	               		</div>
               		</div>
               		<div className="table-bd text-left">
		               		{
		               			this.state.data.map(function(item){
		               				let line = [];
		               				for(let x in item){
		               					line.push(
		               						<div key={item[x].id} className="flex-item">
												<span>{item[x]}</span>
											</div>
		               					)
		               				}
		               				line.push(
		               					<div key={"operation" + item.id} className="flex-item operation">
		               						{
		               							that.props.operation.map(function(i){
		               								if(i.Madel){
		               									return 	<span key={i.todo} onClick={that.handleMadel.bind(that)}>{i.todo}
		               												<Madel	switch={that.state.madel}
		               														title={i.Madel.title}
		               														Form={i.Madel.Form}>
		               												</Madel>
																</span>
		               											
		               								}else{
		               									return 	<span key={i.todo} onClick={that.handleOperation.bind(that,[i.todo,item])}>{i.todo}</span>
		               								}
		               							})
		               						}
										</div>
									)
		               				return 	<div key={"line" + item.id} className="flex">
		               							{line}
		               						</div>
		               			})
							}
               		</div>
               		<div className="table-ft">
               			<div className="table-ft-box">
							<div className="flex text-center">
								<a className="flex-item w50" onClick={this.handleBefore.bind(this)}>
									<i className="bfonts bf-back"></i>
								</a>
								{
									this.page.map(function(item){
										return <a key={item} className={that.state.page === item?"flex-item w50 active":"flex-item w50"} onClick={that.handlePage.bind(that,item)}>{item}</a>
									})
								}
								<a className="flex-item w50" onClick={this.handleAfter.bind(this)}>
									<i className="bfonts bf-right"></i>
								</a>
							</div>
						</div>
					</div>
               	</div>
            </div>
		)
	}
}

export default Table;
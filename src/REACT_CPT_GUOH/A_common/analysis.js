import React from 'react';
import NavBar from '../NavBar/NavBar.js'
import User from '../User/User.js'
import Content from '../Content/Content.js'
import Foot from '../Foot/Foot.js'
import Menu from '../Menu/Menu.js'
import MenuItem from '../MenuItem/MenuItem.js'
import Page from '../Page/Page.js'
import Pages from '../Pages/Pages.js'
import Index from '../Index/Index.js'
import Crumbs from '../Crumbs/Crumbs.js'
import Title from '../Title/Title.js'
import Search from '../Search/Search.js'
import BtnNew from '../BtnNew/BtnNew.js'
import BtnMore from '../BtnMore/BtnMore.js'
import SimpleBlock from '../SimpleBlock/SimpleBlock.js'
import Block from '../Block/Block.js'
import List from '../List/List.js'
import Table from '../Table/Table.js'
import Chart from '../Chart/Chart.js'
import Calendar from '../Calendar/Calendar.js'
import Detail from '../Detail/Detail.js'
import New from '../New/New.js'
import Form from '../Form/Form.js'
import Information from '../Information/Information.js'

const analysis = function(thisProps) {
		let child = [];
		for(let prop in this.props) {
			if(prop.substr(0, 1) > "A" && prop.substr(0, 1) < "Z") {
				switch(prop) {
					case "NavBar":
						child.push(
							<NavBar key="NavBar"
									title={this.props.NavBar.title}
									stitle={this.props.NavBar.stitle}
									Menu={this.props.NavBar.Menu}>
							</NavBar>
						)
						break;
						
					case "Menu":
						child.push(
							<Menu 	key="Menu"
									tab={this.props.Menu.tab}
									MenuItem={this.props.Menu.MenuItem}>
							</Menu>
						);
						break;
						
					case "MenuItem":
						for(let i = 0; i < this.props.MenuItem.length; i++) {
							child.push(
								<MenuItem 	key={"MenuItem" + i}
											icon={this.props.MenuItem[i].icon}
											title={this.props.MenuItem[i].title} 
											active={this.state.UCRTAB===this.props.MenuItem[i].title?"true":"false"}>
								</MenuItem>
							)
						}
						break;
					
					case "Content":
						child.push(
							<Content 	key="Content"
										collapsed={this.props.collapsed === undefined?"off":"on"}
										User={this.props.Content.User}
										Pages={this.props.Content.Pages}>
							</Content>
						)
						break;
					
					case "User":
						child.push(
							<User 	key="User"
									collapsed={this.props.collapsed}
									handleLoad={this.props.User.handleLoad}
									handleUser={this.props.User.handleUser}
									handleLeave={this.props.User.handleLeave} 
									setting={this.props.User.setting}>
							</User>
						)
						break;
						
					case "Pages":
						child.push(
							<Pages 	key="Pages"
									Page={this.props.Pages}>
							</Pages>
						)
						break;
					
					case "Page":
						for(let i=0;i<this.props.Page.length;i++){
							if(this.state.tab === this.props.Page[i].tab){
								child.push(
									<Page 	key="Page"
											tab={this.props.Page[i].tab}
											Index={this.props.Page[i].Page.Index}
											List={this.props.Page[i].Page.List}
											New={this.props.Page[i].Page.New}
											Detail={this.props.Page[i].Page.Detail}>
									</Page>
								)
							}
						}
						break;
					
					case "Index":
						child.push(
							<Index 	key="Index"
									tab={this.props.tab}
									Crumbs={this.props.Index.Crumbs}
									Title={this.props.Index.Title}
									Search={this.props.Index.Search}
									BtnNew={this.props.Index.BtnNew}
									BtnMore={this.props.Index.BtnMore}
									SimpleBlock={this.props.Index.SimpleBlock}
									Block={this.props.Index.Block}
									Calendar={this.props.Index.Calendar}
									Chart={this.props.Index.Chart}
									Table={this.props.Index.Table}>
							</Index>
						)
						break;
						
					case "Crumbs":
						child.push(
							<Crumbs key="Crumbs"
									title={this.props.Crumbs}>
							</Crumbs>
						)
						break;
						
					case "Title":
						child.push(
							<Title 	key="Title"
									title={this.props.Title.title}
									Search={this.props.Title.Search}
									BtnNew={this.props.Title.BtnNew}
									BtnMore={this.props.Title.BtnMore}>
							</Title>
						)
						break;
					
					case "Search":
						if(this.props.Search !== null){
							child.push(
								<Search key="Search"></Search>
							)
						}
						break;
						
					case "BtnNew":
						if(this.props.BtnNew !== null){
							child.push(
								<BtnNew key="BtnNew"
										title={this.props.BtnNew}>
								</BtnNew>
							)
						}
						break;
					
					case "BtnMore":
						if(this.props.BtnMore !== null){
							child.push(
								<BtnMore 	key="BtnMore"
											title={this.props.BtnMore}>
								</BtnMore>
							)
						}
						break;
					
					case "Chart":
						if(this.props.Chart !== null && Object.prototype.toString.call(this.props.Chart)==="[object Object]"){
							child.push(
								<Chart	key="Chart"
										handleLoad={this.props.Chart.handleLoad}>
								</Chart>
							)
						}else if(Object.prototype.toString.call(this.props.Chart)==="[object Array]"){
							for(let i=0;i<this.props.Chart.length;i++){
								child.push(
									<Chart	key={"Chart" + i}
											handleLoad={this.props.Chart[i].handleLoad}>
									</Chart>
								)
							}
						}
						break;
					
					case "SimpleBlock":
						if(this.props.SimpleBlock !== null){
							child.push(
								<SimpleBlock 	key="SimpleBlock"
												BlockItem={this.props.SimpleBlock.BlockItem}
												handleLoad={this.props.SimpleBlock.handleLoad}>
								</SimpleBlock>
							)
						}
						break;
						
					case "Block":
						if(this.props.Block !== null){
							child.push(
								<Block 	key="Block"
										BlockItem={this.props.Block.BlockItem}
										handleLoad={this.props.Block.handleLoad}>
								</Block>
							)
						}
						break;
					
					case "List":
						if(this.props.List !== null){
							child.push(
								<List 	key="List"
										tab={this.props.tab}
										Crumbs={this.props.List.Crumbs}
										Title={this.props.List.Title}
										Search={this.props.List.Search}
										BtnNew={this.props.List.BtnNew}
										BtnMore={this.props.List.BtnMore}
										Block={this.props.List.Block}
										SimpleBlock={this.props.List.SimpleBlock}
										Table={this.props.List.Table}
										Calendar={this.props.Index.Calendar}
										Chart={this.props.Index.Chart}>
								</List>
							)
						}else{
							child.push(<List key="List"></List>)
						}
						break;
						
					case "Table":
						if(this.props.Table !== null && Object.prototype.toString.call(this.props.Table)==="[object Object]"){
							child.push(
								<Table 	key="Table"
										tab={this.props.Table.tab}
										head={this.props.Table.head} 
										handleLoad={this.props.Table.handleLoad} 
										operation={this.props.Table.operation}>
								</Table>
							)
						}else if(Object.prototype.toString.call(this.props.Table)==="[object Array]"){
							for(let i=0;i<this.props.Table.length;i++){
								child.push(
									<Table 	key={"Table" + i}
											tab={this.props.Table[i].tab}
											head={this.props.Table[i].head} 
											handleLoad={this.props.Table[i].handleLoad} 
											operation={this.props.Table[i].operation}>
									</Table>
								)
							}
						}
						break;
					
					case "Calendar":
						if(this.props.Calendar !== null){
							child.push(
								<Calendar 	key="Calendar"
											handleLoad={this.props.Calendar.handleLoad}>
								</Calendar>
							)
						}
						break;
					
					case "New":
						if(this.props.New !== null){
							child.push(
								<New 	key="New"
										Crumbs={this.props.New.Crumbs}
										Title={this.props.New.Title}
										Form={this.props.New.Form}>
								</New>
							)
						}else{
							child.push(<New key="New"></New>)
						}
						break;
					
					case "Form":
						if(this.props.Form !== null){
							child.push(
								<Form 	key="Form"
										field={this.props.Form.field}
										input={this.props.Form.input}
										submit={this.props.Form.submit}
										handleSubmit={this.props.Form.handleSubmit}>
								</Form>
							)
						}
						break;
					
					case "Detail":
						if(this.props.Detail !== null){
							child.push(
								<Detail key="Detail"
										Crumbs={this.props.Detail.Crumbs}
										Title={this.props.Detail.Title}
										Information={this.props.Detail.Information}
										Block={this.props.Detail.Block}
										SimpleBlock={this.props.Detail.SimpleBlock}
										Table={this.props.Detail.Table}
										Calendar={this.props.Index.Calendar}
										Chart={this.props.Index.Chart}>
								</Detail>
							)
						}else{
							child.push(<Detail key="Detail"></Detail>)
						}
						break;
					
					case "Information":
						if(this.props.Information !== null){
							child.push(
								<Information 	key="Information"
												info={this.props.Information.info}
												handleLoad={this.props.Information.handleLoad}
												handleEdit={this.props.Information.handleEdit}>
								</Information>
							)
						}
						break;
						
					case "Foot":
						child.push(
							<Foot 	key="Foot"
									copyRight={this.props.Foot.copyRight}>
							</Foot>
						)
						break;
					
					default:
						break;
					}
				}
			}
			this.child = child;
		}

		export default analysis;
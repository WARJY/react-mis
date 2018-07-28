//入口函数
//new App(controller).render(props);	
class App {
	constructor(controller) {
		this.render = function(props) {
			controller(props);
		}
	}
}

export default App;
import $ from 'jquery'

class Invoker {
	constructor(props) {
		const BASEURL = props.agreement || 'http' + '://test.z.guoh.me/Home/Invoke?';
		const BASEDATA = {
			LoginCode: "",
			LoginId: 0
		}

		this.props = {
			agreement: props.agreement || 'http',
			async: props.async || true,
			method: props.method,
			para: props.para,
			data: props.data || "",
			baseUrl: props.base || BASEURL,
			baseData: props.baseData || BASEDATA
		}
	}

	GET(withBase) {
		let that = this;
		let url = this.props.baseUrl;
		url += 'Method=' + this.props.method;
		if(withBase) {
			url += this.addBaseData("get");
		}
		url += this.obj2url(this.props.para);
		var def = $.Deferred();
		$.ajax({
			type: 'get',
			url: url,
			async: that.props.async,
			dataType: "json",
			success: function(data) {
				def.resolve(data)
			},
			error: function() {
				that.handleError()
			}
		})
		return def;
	}

	POST(withBase) {
		let that = this;
		let url = this.props.baseUrl;
		let data = {};
		if(withBase) {
			data = $.extend({Method:this.props.method}, this.addBaseData("post"), this.props.para);
		}
		var def = $.Deferred();
		$.ajax({
			type: 'post',
			url: url,
			data: data,
			async: that.props.async,
			dataType: "json",
			success: function(data) {
				def.resolve(data)
			},
			error: function() {
				that.handleError()
			}
		})
		return def;
	}
	
	obj2url(obj) {
		let url = "";
		for(let item in obj) {
			url += "&" + item + "=" + obj[item];
		}
		return url;
	}

	addBaseData(type) {
		if(type==="get"){
			let url = "";
			let baseDate = this.getSession(this.props.baseData);
			url += this.obj2url(baseDate)
			return url;
		}else{
			return this.getSession(this.props.baseData);
		}
	}

	setSession(obj) {
		for(let i in obj) {
			sessionStorage.setItem(i, obj[i]);
		}
	}

	getSession(obj) {
		for(let i in obj) {
			obj[i] = sessionStorage.getItem(i);
		}
		return obj;
	}

	handleError(Error) {
		if(Error) {
			alert(Error)
		} else {
			alert("网络故障");
		}
	}
}

export default Invoker;
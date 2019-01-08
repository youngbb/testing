"use strict";



class canvasBoard{

	constructor(_canvasid, w = 800, h = 800){
		//this._instance = instance;
		if(instanceOf){
			console.log('Singleton object')
      		return this._instance;
    	}
    	this._instance = 1;
		this._id = _canvasid;
		this._w = w;
		this._h = h;
		this._canvas = document.createElement('canvas');
		this._ctx = this._canvas.getContext('2d');
		this._canvas.width = this._w;
		this._canvas.height = this._h;

	}

	get _canvasctx(){
		return this._ctx;
	}

	set _canvasctx(ctx){
		this._ctx = ctx;
	}

	collectImage(img_src){
		let i = img_src;
		let im = new Image();
		im.src = i;

		return im;
	}
}






function init(){
}

window.onload = init();
	


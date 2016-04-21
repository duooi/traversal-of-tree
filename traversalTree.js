var Node = [];
var timer = null;
window.onload = function(){
	var container = document.querySelector("#container");

	var preBtn = document.querySelector("#preBtn");
	var midBtn = document.querySelector("#midBtn");
	var lastBtn = document.querySelector("#lastBtn");

	preBtn.onclick = function(){
		clearInterval(timer);
		resetBgColor();
		Node = [];
		preOrder(container);
		visitElem();
	};

	midBtn.onclick = function(){
		clearInterval(timer);
		resetBgColor();
		Node = [];
		midOrder(container);
		visitElem();
	};

	lastBtn.onclick = function(){
		clearInterval(timer);
		resetBgColor();
		Node = [];
		lastOrder(container);
		visitElem();
	}
}

//先序遍历
function preOrder(ele){
	if(ele == null){
		return;
	}
	Node.push(ele);
	if(ele.firstElementChild){
	preOrder(ele.firstElementChild);
	}
	if(ele.lastElementChild){
		preOrder(ele.lastElementChild);
	}
}

//中序遍历
function midOrder(ele){
	if(ele == null){
		return;
	}
	if(ele.firstElementChild){
		midOrder(ele.firstElementChild);
	}
	Node.push(ele);
	if(ele.lastElementChild){
		midOrder(ele.lastElementChild);
	}
}

//后序遍历
function lastOrder(ele){
	if(ele == null){
		return;
	}
	if(ele.firstElementChild){
		lastOrder(ele.firstElementChild);
	}
	if(ele.lastElementChild){
		lastOrder(ele.lastElementChild);
	}
	Node.push(ele);
}

//访问元素
function visitElem(){
	var i=0;
	Node[i++].style.backgroundColor = '#ccc';
	timer = setInterval(function(){
		if(i<Node.length){
			Node[i-1].style.backgroundColor = '#fff';
			Node[i].style.backgroundColor = '#ccc';
			i++;
		}else{
			Node[i-1].style.backgroundColor = '#fff';
			clearInterval(timer);
		}
	},500);
}

//重置背景颜色
function resetBgColor(){
	for(var i=0;i<Node.length;i++){
		Node[i].style.backgroundColor = '#fff';
	}
}
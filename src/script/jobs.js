
export function updateDepth(book, turn, newPage) {
	var page = turn(book, 'page'),
		pages = turn(book, 'pages'),
		depthWidth = 16*Math.min(1, page*2/pages);
		newPage = newPage || page;
	if (newPage>3){
		book.querySelector('.sj-book .p2 .depth').style.width = typeof depthWidth === "string" ? depthWidth : depthWidth + "px";
		book.querySelector('.sj-book .p2 .depth').style.left = 20 - depthWidth;
	}else{
		book.querySelector('.sj-book .p2 .depth').style.width = "0px";
	}
	depthWidth = 16*Math.min(1, (pages-page)*2/pages);
	if (newPage<pages-3){
		book.querySelector('.sj-book .p111 .depth').style.width = typeof depthWidth === "string" ? depthWidth : depthWidth + "px";
		book.querySelector('.sj-book .p111 .depth').style.right = 20 - depthWidth;
	}else{
		book.querySelector('.sj-book .p111 .depth').style.width = "0px";
	}
}

function loadPage(book, page, element) {
	let {heredoc} = require('./../assets/jobs/pages/page' + page + '..js');
	let html = heredoc()
	let src = /samples\/steve-jobs\/(.*).jpg/.exec(html)
	if(src){
		html = html.replace(/samples\/steve-jobs\/(.*).jpg/, require('./../assets/jobs/' + src[1] + '.jpg'));
	}
	element.innerHTML = html;
}

export function addPage(book, turn, page) {
	if (!turn(book, 'hasPage', page)) {
		var element = document.createElement("div");
		element.className = "own-size";
		element.style.width = "460px";
		element.style.height = "582px";
		element.innerHTML = "<div class='loader'></div>";
		if (turn(book, 'addPage', element, page)) {
			loadPage(book, page, element);
		}

	}
}

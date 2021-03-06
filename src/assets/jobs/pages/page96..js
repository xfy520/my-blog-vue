
export function heredoc() {
	return function () {/*
<div class="book-content">

<p class="center-pic" style="margin:100px 0;">
	<img src="samples/steve-jobs/pics/44.jpg" width="252" height="378">
</p>

</div>
<span class="page-number">96</span>
*/}.toString().split('\n').slice(1, -1).join('\n') + '\n';
}
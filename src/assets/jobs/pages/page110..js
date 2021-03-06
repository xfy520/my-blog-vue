export function heredoc() {
	return function () {/*

*/}.toString().split('\n').slice(1, -1).join('\n') + '\n';
}
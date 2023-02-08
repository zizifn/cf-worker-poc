export default {
	fetch() {
		let result = 'Hello worker!!';
		if (connect) {
			result = `${result}  + has connect method`;
		}
		return new Response('Hello worker!!', {
			headers: {
				'content-type': 'text/plain',
			},
		});
	},
};

export default {
	async fetch(request) {
		if (request.method === "OPTIONS") {
			return new Response('', {
				headers: {
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
					"Access-Control-Max-Age": "86400",
				 },
			});
		}
		let count = 0;
		const transformStream =
			request.body?.pipeThrough(new TextDecoderStream()).pipeThrough(
				new TransformStream({
					transform(chunk, controller) {
						console.log(`chunk: ${chunk}`);
						controller.enqueue(new TextEncoder().encode(`${chunk}-----server count --------${count++}\r\n`));
					},
				})
			) || 'default';
		return new Response(transformStream, {
			headers: {
				'content-type': 'text/plain'
			 },
		});
	},
};

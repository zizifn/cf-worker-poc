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
						// this will check how many reuqest chunk coming to worker....
						// if worker is support streaming request, this `count` will same as client chunk
						controller.enqueue(new TextEncoder().encode(`${chunk}-----server count --------${count++}\r\n`));
					},
				})
			) || 'default get method';
		return new Response(transformStream, {
			headers: {
				'content-type': 'text/plain'
			 },
		});
	},
};

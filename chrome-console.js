  // please run below script under worker url for cors issue.

  try {
    const readableStream = new ReadableStream({
      index: 0,
      start(controller) {
        const interval = setInterval(() => {
          controller.enqueue(`client send ${this.index++}`);
        }, 500);

        setTimeout(() => {
          clearInterval(interval);
          controller.close();
        }, 10_000);
      },
    }).pipeThrough(new TextEncoderStream());

    const url = "https://wroker-poc.zizifn.workers.dev/";

    const resp = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
      body: readableStream,
      duplex: "half",
    });


    const reader = resp.body.getReader();
    while(true){
        const {done, value} = reader.read()
        if(done){
            break;
        }
        console.log(value)
    }
  } catch (err) {
    console.log(err);
  }
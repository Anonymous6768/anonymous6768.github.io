self.__uv$config = {
    prefix: '/staticproxy/indiumlite/',
    bare:'https://static.99.135.156.178.clients.your-server.de/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/staticproxy/uv/uv.handler.js',
    bundle: '/staticproxy/uv/uv.bundle.js',
    config: '/staticproxy/uv/uv.config.js',
    sw: '/staticproxy/uv/uv.sw.js',
};

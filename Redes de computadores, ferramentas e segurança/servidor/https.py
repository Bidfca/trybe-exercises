import ssl
from http.server import HTTPServer, SimpleHTTPRequestHandler

ssl_context = ssl.SSLContext()
ssl_context.load_cert_chain("cert.pem", keyfile="key.pem")

server_address = ("127.0.0.1", 8000)
httpd = HTTPServer(server_address, SimpleHTTPRequestHandler)
httpd.socket = ssl_context.wrap_socket(httpd.socket, server_side=True)

httpd.serve_forever()
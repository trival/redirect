var http = require('http')

const port = (process.env.PORT && parseInt(process.env.PORT)) || 5000
const url = process.env.URL

function main() {
	if (!url) {
		throw new Error('no URL provided')
	}

	return http
		.createServer(function (req, res) {
			if (req.method?.trim().toLocaleLowerCase() === 'get') {
				res.statusCode = 302
				res.setHeader('Content-Type', 'text/plain')
				res.setHeader('Location', url)
				res.end('Redirecting to ' + url)
			} else {
				res.statusCode = 404
				res.setHeader('Content-Type', 'text/plain')
				res.end('Not found')
			}
		})
		.listen(port)
}

main()

import express from 'express';

const app = express();
app.set('trust proxy', true)

const port = 3001;

app.get(['/', '/api'], (req, res) => {
	var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
	res.send({ip})
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});

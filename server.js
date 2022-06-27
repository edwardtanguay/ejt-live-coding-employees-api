import express from 'express';

const app = express();
const PORT = 3334;

app.get('/', (req, res) => {
	res.send('<h1>Employee API</h1>');
});

app.listen(PORT, () => {
	console.log(`listening on http://localhost:${PORT}`);
});
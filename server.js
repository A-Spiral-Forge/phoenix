const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.join(__dirname, '/config.env') });

const app = require('./app');

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});

const http = require('http');
const app = require('./app');
require('dotenv').config();
const cors = require('cors');
const PORT = process?.env?.PORT ? process.env.PORT : 1338;

app.use(cors());
app.set("port", PORT);

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`SERVER RUN ON PORT : ${PORT}`);
});
const server = require("./api/server");

const PORT = 1234;

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});

const app = require("./app")
const port = process.env.PORT || 8080

// start server
const server = app.listen(port, function () {
    console.log(`Server listening on port ${port}`)
})

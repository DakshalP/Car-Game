const express = require('express')
const app = express();

app.use(express.static('public'));

const server = app.listen(4000, () => {
    console.log("Server started on 4000")
})
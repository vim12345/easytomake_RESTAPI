const app = require('express')();
const PORT = 8000;
app.listen(
    PORT,
    () => console.log(`server running on ${PORT}`)
);

app.get('/fruits', (req, res) => {
    res.send({
        apple: 2,
        banana: 12
    })
});


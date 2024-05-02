import express from 'express';
const app = express();
const port = 3111;

app.get('/', (req, res) => {
    res.send(`Welcome to a WebContainers app! <script>window.parent.postMessage({js:"alert('hello');"}, '*');</script>`);
});

app.listen(port, () => {
    console.log(`App is live at http://localhost:\${port}`);
});

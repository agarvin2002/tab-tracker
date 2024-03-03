import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.get('/status', (req, res) => {
    res.send({
        "message": "Hello World"
    });
});

const PORT =  8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

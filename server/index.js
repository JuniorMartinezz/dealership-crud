import express from 'express';
import db from "./model/MyConnection.js";
import cors from 'cors';

const app = express();

app.get('/', (req, res) => {
    let SQL = 
            "DELETE FROM car WHERE car_name = 'toyota'"
            

    db.query(SQL, (err, result) => {
        console.log(err);
        res.send(result)
    });
});

app.use(cors());
app.use(express.json());

app.listen(3001, () => {
    console.log('funfou');
})
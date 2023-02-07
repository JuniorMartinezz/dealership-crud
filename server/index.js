import express from 'express';
import db from "./model/MyConnection.js";
import cors from 'cors';

const app = express();

app.get('/', (req, res) => {
    let SQL = 
            "INSERT INTO car(car_model, car_brand, car_color, car_year)"
            

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
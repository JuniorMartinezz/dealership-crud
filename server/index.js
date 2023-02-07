import express from 'express';
import db from "./model/MyConnection.js";
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
    const { type } = req.body;
    const { brand } = req.body;
    const { model } = req.body;
    const { color } = req.body;
    const { release_date } = req.body;

    let SQL_car = "INSERT INTO car(car_brand, car_model, car_color, car_year) VALUES(?, ?, ?, ?)";
    let SQL_moto = "INSERT INTO motorcycle(moto_brand, moto_model, moto_color, moto_year) VALUES(?, ?, ?, ?)";

    db.query(SQL_car, [brand, model, color, release_date], (err, result) => {
        console.log(err);
    });

    /* if(type === 'motocicleta'){
        db.query(SQL_moto, [brand, model, color, year], (err, result) => {
            console.log(err);
        });
    }else{
        db.query(SQL_car, [brand, model, color, year], (err, result) => {
            console.log(err);
        });
    } */

    console.log(res);
})

app.listen(3001, () => {
    console.log('funfou');
})
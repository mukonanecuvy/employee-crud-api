import express from "express";
import bodyParser from "body-parser";
import db from "./db.js";
import employeeRoutes from "./controller/employee.controller.js";

const app = express();

app.use(bodyParser.json())
app.use(express.json());
app.use('/api/employees', employeeRoutes)

app.use((err, req, res, next) => {

    console.log(err)

    res.status(err.status || 500).send('something went wrong')

})


db.query("SELECT 1")
    .then(() => {
        console.log('db connection succeeded')

        app.listen(3000,
            () => console.log('server started at 3000'))

    })
    .catch(err => console.log('db connection failed \n' + err))


const express = require('express'),
    app = express();

const bodyParser = require('body-parser');
const db = require('./db'),

    //bodyParser = require('body-parser')

    employeeRoutes = require('./controller/employee.controller')

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


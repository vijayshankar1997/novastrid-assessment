const pool = require('pg')


export const dbConnection = () =>{
        const newPool = new pool({
            "username":"username",
            "password": "password",
            "port": 5432,
            "host": "host"
        })

       return newPool.connect()
}
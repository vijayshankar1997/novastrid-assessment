import {dbConnection} from "./db"

export async function insertUser(userName, password) {
    const client = await dbConnection();
    const query = `insert into userDetails (username, password) values ($1, $2)`;
    const params = [userName, password]
    const res = await client.query(query, params);
    return res
}

export async function getUser(userName, password) {
    const client = await dbConnection();
    const query = `select username, password from userDetails where username = $1 and password = $2`;
    const params = [userName, password]
    const res = await client.query(query, params)

    if(res.rows.length === 0 ){
        return "Invalid User"
    }else{
        return "Valid User"
    }
}
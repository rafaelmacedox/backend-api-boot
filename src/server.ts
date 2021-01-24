import { createConnection } from "typeorm";
import app from "./app";

const connect = () => {
    createConnection()
        .then(async (connection) => {
            console.log('Database Connected!')

            const PORT = process.env.PORT || 3333;

            app.listen(PORT, () => {
                console.log(`Running Server on port ${PORT}`)
            })
        })
        .catch(err => {
            console.log('Database connection error! - ');
            console.log(err);

            setTimeout(() => connect(), 3000);
        })
}

connect();
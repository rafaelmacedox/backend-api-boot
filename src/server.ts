import app from "./app";
import ApplicationConfig from "./common/ApplicationConfig";

const connect = () => {
    app.listen(ApplicationConfig.PORT, () => {
        console.log(`Running Server on port ${ApplicationConfig.PORT}`)
    })
}

connect();
let db = require("sqlite");
let conexion = db.createConnection({
    host: "localhost",
    database: "database-alux.db",
    user: "root",
    password: ""
});
conexion.coonect(function(err) {
    if(err){
        throw err;
    }else{
        console.log("conexion exitosa");
    }
});
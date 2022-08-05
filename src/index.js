// 1. IMPORTACIONES
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const favicon = require("serve-favicon");
const app = express();
const PORT = process.env.PORT || 4000;

// 2. MIDDLEWARES
app.use(cors());
app.use(express.json());

// 3. RUTAS
app.get("/", (req, res) => {
    return res.json({
        message: "Hola mundo"
    })
});
app.use("/api/users", require("./routes/users.routes"));


// 4. SERVIDOR
app.listen(PORT, () => {
    console.log(`Servidor en linea en el puerto ${PORT}`);
});

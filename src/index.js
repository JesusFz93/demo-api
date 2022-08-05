// 1. IMPORTACIONES
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4001;

// 2. MIDDLEWARES
app.use(express.json());
app.use(cors());

// 3. RUTAS
app.use("/api/users", require("./routes/users.routes"));


// 4. SERVIDOR
app.listen(PORT, () => {
    console.log(`Servidor en linea en el puerto ${PORT}`);
});


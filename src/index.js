// 1. IMPORTACIONES
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4001;

// 2. MIDDLEWARES
app.use(express.json());

// 3. RUTAS
app.use("/api/users", require("./routes/users.routes"));


// 4. SERVIDOR
app.listen(PORT, () => {
    console.log(`Servidor en linea en el puerto ${PORT}`);
});


const express = require("express");
const cors = require("cors");
// const favicon = require("serve-favicon");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || "4000";

    this.paths = {
      users: "/api/users",
    };

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    // this.app.use(express.static("public"));
    // this.app.use(favicon(__dirname + "/../assets/favicon.ico"));
  }

  routes() {
    this.app.use(this.paths.users, require("../routes/users.routes"));
  }

  execute() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}

module.exports = Server;

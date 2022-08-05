const { v4: uuid } = require("uuid");
const { users } = require("../database/db.js");

const getUsers = (req, res) => {

    return res.json({
        ok: true,
        msg: "Usuarios obtenidos",
        data: users
    })

};

const createUser = (req, res) => {

    const { user_name, password } = req.body

    const user = {
        id: uuid(),
        user_name: user_name,
        password: password
    }

    users.push(user)

    return res.json({
        ok: true,
        msg: "Usuario agregado",
        data: user
    })

}

const updateUser = (req, res) => {
    const { id } = req.params
    const { user_name, password } = req.body

    const user = users.find(user => {
        return user.id === id
    })

    user.user_name = user_name
    user.password = password

    return res.json({
        ok: true,
        msg: "Usuario actualizado",
        data: user
    })
}

const deleteUser = (req, res) => {

    const { id } = req.params

    const user = users.find(obj => {
        return obj.id === id
    })

    users.splice(users.indexOf(user), 1)

    return res.json({
        ok: true,
        msg: "Usuario eliminado",
        data: user
    })
}

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
}
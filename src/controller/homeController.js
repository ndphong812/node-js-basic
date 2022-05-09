import { json } from "body-parser";
import { render } from "ejs";
import pool from "../configs/connectDB"
let getHomePage = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `users`');
    return res.render("index.ejs", { dataUser: rows })
}

let getDetailPage = async (req, res) => {
    let userID = req.params.userID
    let user = await pool.execute('select * from `users` where id = ?', [userID])
    return res.render("index.ejs", { dataUser: user[0] })
}

let addNewUser = async (req, res) => {
    await pool.execute('insert into users(firstName, lastName, email, address) values (?,?,?,?)',
        [req.body.firstName, req.body.lastName, req.body.email, req.body.address]
    )
    return res.redirect('/');
}

let deleteUser = async (req, res) => {
    await pool.execute('DELETE FROM users WHERE id = ?', [req.body.id])
    return res.redirect('/');
}
let editUser = async (req, res) => {
    let userID = req.params.id
    let user = await pool.execute('select * from `users` where id = ?', [userID])
    return res.render("edit.ejs", { dataUser: user[0][0] })
}

let updateUser = async (req, res) => {
    await pool.query(`UPDATE users SET firstName = ?, lastName = ?, email = ?, address = ?
     WHERE id = ? `, [req.body.firstName, req.body.lastName, req.body.email, req.body.address, req.body.id])
    return res.redirect('/');
}
module.exports =
{
    getHomePage,
    getDetailPage,
    addNewUser,
    deleteUser,
    editUser,
    updateUser
}
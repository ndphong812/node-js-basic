import pool from "../configs/connectDB"
let getHomePage = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `users`');
    console.log(rows)
    return res.render("index.ejs", { dataUser: rows })
}

let getDetailPage = async (req, res) => {
    let userID = req.params.userID
    let user = await pool.execute('select * from `users` where id = ?', [userID])
    return res.render("index.ejs",{dataUser:user[0]})
}
module.exports =
{
    getHomePage,
    getDetailPage
}
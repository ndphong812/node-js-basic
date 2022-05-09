import pool from "../configs/connectDB"

let getAllUser = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `users`');
    return res.status(200).json(
        {
            message: "ok",
            data: rows
        }
    )
}

let createNewUser = async (req, res) => {

    if (!req.body.firstName || !req.body.lastName || !req.body.email || !req.body.address)
        return res.status(200).json(
            {
                message: "missing data"
            }
        )
    await pool.execute('insert into users(firstName, lastName, email, address) values (?,?,?,?)',
        [req.body.firstName, req.body.lastName, req.body.email, req.body.address]
    )

    const [rows, fields] = await pool.execute('SELECT * FROM `users`');
    return res.status(200).json(
        {
            message: "ok",
            data: rows
        }
    )
}
module.exports =
{
    getAllUser,
    createNewUser
}
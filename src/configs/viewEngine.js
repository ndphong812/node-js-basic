import express from "express"
const configViewEngine = (app) => {
    app.use(express.static('./src/public')) //khai bao cac file tinh, nguoi dung co the xem duoc
    app.set("view engine", "ejs"); // su dung view engine ejs
    app.set("views", "./src/views");// dinh nghia duong dan
}
export default configViewEngine;
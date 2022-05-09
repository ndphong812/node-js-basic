import express from "express";
import apiController from "../controller/apiController"
let router = express.Router()

const initAPI = (app) => {
    router.get('/users', apiController.getAllUser)
    router.post('/create-new-user',apiController.createNewUser)
    return app.use("/api/v1", router)
}
export default initAPI;
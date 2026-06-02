import express from 'express';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import { createJWT } from '../util.js';

export default (db) => {
    const router = express.Router();

    router.get("/ping", (req, res) => {
        //Shows decoded token
        console.log(req.auth);
        return res.json({ msg: "cookie successful" })
    })
    return router;
}
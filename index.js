import express from "express";
import consign from 'consign';

const app = express();

consign()
    .include('models')
    .include('libs/middlewares.js')
    .then('routes')
    .then('libs/boot.js')
    .into(app);


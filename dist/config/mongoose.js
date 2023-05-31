"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const DB_URL = process.env.DB_URL;
const connectToDatabase = () => {
    const options = { autoIndex: false, maxPoolSize: 10 };
    (0, mongoose_1.connect)(`${DB_URL}`)
        .then(() => {
        console.log(`Database now Connected...`);
    })
        .catch((error) => {
        console.log('An error occurred while attempting to connect to Database...');
    });
};
exports.default = connectToDatabase;

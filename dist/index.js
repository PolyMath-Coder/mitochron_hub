"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const mongoose_1 = __importDefault(require("./config/mongoose"));
const routes_1 = __importDefault(require("./routes/routes"));
const PORT = process.env.PORT;
const app = (0, express_1.default)();
app.use((0, express_2.json)());
app.use((0, express_2.json)());
app.use((0, express_2.urlencoded)({ extended: true }));
app.use('/api', routes_1.default);
app.get('/', (req, res) => {
    res
        .status(200)
        .json({ status: true, message: 'Welcome to Mitochron server!' });
});
(0, mongoose_1.default)();
app.listen(PORT, () => {
    console.log(`Server now live at port ${PORT}`);
});

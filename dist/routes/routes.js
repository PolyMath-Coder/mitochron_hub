"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ticket_routes_1 = __importDefault(require("../tickets/ticket.routes"));
const router = (0, express_1.Router)();
router.use('/ticket', ticket_routes_1.default);
exports.default = router;

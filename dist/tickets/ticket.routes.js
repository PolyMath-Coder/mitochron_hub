"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ticket_controller_1 = require("./ticket.controller");
const ticketRouter = (0, express_1.Router)();
ticketRouter.post('/create', ticket_controller_1.createTicket);
exports.default = ticketRouter;

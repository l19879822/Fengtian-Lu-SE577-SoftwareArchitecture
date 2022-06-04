const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  clientID: process.env.clientID,
  clientSerect: process.env.clientSerect,
};

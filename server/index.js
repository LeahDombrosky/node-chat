const express = require("express");
const { json } = require("body-parser");
const mc = require(__dirname + "/controllers/messages_controller");
const app = express();

app.use(json());
app.use(express.static(__dirname + "/../public/build"));
const port = 3000;

const messagesBaseUrl = "/api/messages";

app.get(messagesBaseUrl, mc.read);
app.post(messagesBaseUrl, mc.create);
app.put(`${messagesBaseUrl}/:id`, mc.update);
app.delete(`${messagesBaseUrl}/:id`, mc.delete);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

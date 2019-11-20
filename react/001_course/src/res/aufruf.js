import config from "../config";
import openSocket from "socket.io-client";
let socket = openSocket.connect(config.uri.ENDPOINT, {
  secure: true,
  reconnect: true
});

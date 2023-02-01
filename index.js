import schema from "./module/index.js";
import Server from "./server.js";
import config from "./config/configuration.js";

const server = new Server(config);

(() => {
  server.startapolloserver(schema);
})();

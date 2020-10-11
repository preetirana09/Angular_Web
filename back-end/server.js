import Hapi, { server } from "@hapi/hapi";
import routes from "./routes";
import { db } from "./database;";

let server;

const start = async () => {
  server = Hapi.server({
    port: 8080,
    host: "localhost",
  });

  routes.forEach((route) => server.route(route));
  db.connect();
  await server.start();
  console.log(`server is listening on ${server.info.uri}`);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

process.on('SIGINT',() => {
    console.log('Stopping sever');
    await server.stop({timeout:10000});
    db.end();
    console.log('server stopped');
    process.exit(0);
});


start();

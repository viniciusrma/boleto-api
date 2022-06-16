const app = require("./app");
const router = app._router;

app.use("/", router);

const port = 8000;

app.listen(port, () => {
  console.log(`Listening on port : ${port} `);
});

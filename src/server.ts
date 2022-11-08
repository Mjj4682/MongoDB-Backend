import createApp from "./app";
import dotenv from "dotenv";
import connect from "./models/db";
dotenv.config();

const startServer = async () => {
  const app = createApp();
  const PORT = process.env.PORT;
  const db = "mongodb://localhost:27017/croket";
  connect({ db });
  app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
  });
};

startServer();
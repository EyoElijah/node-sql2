import dotenv from "dotenv";
import express, { json } from "express";
import postRoutes from "./routes/postRoutes.js";
dotenv.config();

const app = express();

app.use(json());
app.use("/api/posts", postRoutes);

app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).json({
    message: "Something went wrong",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));

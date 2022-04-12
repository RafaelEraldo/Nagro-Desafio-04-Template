import express from "express";

const app = express();

app.use(express.json());

app.get("/", (request, response) =>
  response.json({
    teste: "ok",
  })
);

app.listen(3331, () => {
  console.log("server on port 3331");
});

const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/getData", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.jsonbin.io/v3/b/6543acbe54105e766fca71e1",
      {
        headers: {
          "X-ACCESS-KEY":
            "$2a$10$9BqSjwnHh/h1uMdFbuthi.gEATjmhsQ.uXU.8pmO3M9r1Okwnum96",
        },
      }
    );
    res.json(response.data.record);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

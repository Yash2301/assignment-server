const express = require("express");
const app = express();
const port = 3000;
const axios = require("axios");
const cors = require("cors");
const http = require("http");

app.use(cors());
app.post("/generate-token", async (req, res) => {
  var data = JSON.stringify({});

  var config = {
    method: "post",
    url: "https://devcore02.cimet.io/v1/generate-token",
    headers: {
      "sec-ch-ua":
        '"Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"',
      "sec-ch-ua-mobile": "?0",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
      "Content-Type": "application/json",
      Accept: "application/json, text/plain, */*",
      Referer: "http://localhost:3000/",
      "Api-key": "4NKQ3-815C2-8T5Q2-16318-55301",
      "sec-ch-ua-platform": '"Windows"',
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.post("/plan-list", async (req, res) => {
    var data = JSON.stringify({
        "session_id": "eyJpdiI6IkVNUkZ1N0hlSHhHSnJ3Vjl4aUlxc0E9PSIsInZhbHVlIjoieFlxa1wvVDYxQWl5U2pxMDFcL0R6ZVVvdEN6Mkk0R29TRDN3ZnN0U3VGcER0cEFMa2NVb0xNcDJudjlRTHRUbGJkIiwibWFjIjoiMTE0MmU0MGE5YmJhMzY4Nzc4MDExNmZkNTI1MjZhMGE3OTQyMDZmOTc1MTVmZDM1Mzc3ZmJmNjhmMzllOGYxYSJ9"
    });
    var config = {
        method: "post",
        url: "https://devcore02.cimet.io/v1/plan-list",
        headers: {
          "sec-ch-ua":
            '"Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"',
          "sec-ch-ua-mobile": "?0",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
          "Content-Type": "application/json",
          Accept: "application/json, text/plain, */*",
          Referer: "http://localhost:3000/",
          "Api-key": "4NKQ3-815C2-8T5Q2-16318-55301",
          "sec-ch-ua-platform": '"Windows"',
          "Auth-token": req.headers['auth-token'],
        },
        data: data,
      };
    
      axios(config)
        .then(function (response) {
          res.status(200).json(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

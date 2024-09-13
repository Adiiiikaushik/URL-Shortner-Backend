const express = require("express");
const{ handleGenerateNewShortURL } = require("../controllers/url");
const{ handleGetAnalytics } = require("../controllers/url");

const router = express.Router();

router.post("/",handleGenerateNewShortURL);

router.get("/analytics/:shortId",handleGetAnalytics);

module.exports = router;
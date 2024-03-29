const express = require("express");
const router = express();

router.use("/api/users", require("./UserRoutes"));
router.use("/api/photos", require("./PhotoRoutes"));

//test router
router.get("/", (req, res) => {
  return res.send("API status online!");
});

module.exports = router;

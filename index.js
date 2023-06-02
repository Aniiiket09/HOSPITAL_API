const express = require("express");
const port = 9000;

app.listen(port, function (err) {
  if (err) {
    console.log("error");
    return;
  }

  console.log(`server is running on ${port}`);
});

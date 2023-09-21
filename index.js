const express = require('express');
const app = express();

app.get('/health-check', (req, res) => {
    res.send({healthy: true, version: process.env.npm_package_version});
    }
);


console.log("broken app")
setTimeout(() => {
  // This function will be executed after a very long time (effectively, indefinitely).
}, 999999999);

/* app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
    }
); */


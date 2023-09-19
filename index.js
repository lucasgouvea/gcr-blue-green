const express = require('express');
const app = express();

app.get('/health-check', (req, res) => {
    res.send({healthy: true, version: process.env.npm_package_version});
    }
);

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
    }   
);


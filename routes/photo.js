const express = require('express');
const Photo = require('../models/Photo');
const router = express.Router();
const config = require('config');
const fetch = require('node-fetch');


router.post('/', async (req, res) => {
  try {
    res.send(config.get('slateKey'))
  } catch (err) {
    console.error(err.message);
  }
});

router.get('/', async (req, res) => {
  try {
    const response = await fetch('https://slate.host/api/v1/get-slate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: config.get('slateKey'),
      },
      body: JSON.stringify({
        data: {
          private: false,
        },
      }),
    });
    const json = await response.json();
    let imgURL = json.slate.data.objects;
    imgURL = imgURL[Math.floor(Math.random() * imgURL.length)].url;
    res.send(imgURL);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;

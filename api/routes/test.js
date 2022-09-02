const { query } = require('express');
const express = require('express');
const conn = require('../../config');
const router = express.Router();



router.use(express.json());
router.get('/', (req, resp, next) => {
  conn.query('select * from organization_details', (err, result) => {
    if (err) { resp.send("error in api") }
    else { resp.send(result) }
  })
})

router.post('/', (req, resp) => {
  const data = req.body;
  conn.query('INsert INTO organization_details SET?', data, (err, result) => {
    if (err) { resp.send("error in api") }
    else { resp.send(result) }
  })
})




module.exports = router;


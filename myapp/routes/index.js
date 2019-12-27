var express = require('express');
var router = express.Router();

const landing = require('../controllers/landing');

/* home page. */
router.get('/', landing.get_landing);
router.post('/', landing.submit_lead)

/* leads */
router.get('/leads', landing.show_leads);
// ':lead_id' represents an arg in the uri
// ':lead_id' gets passed to landing.show_lead
router.get('/lead/:lead_id', landing.show_lead);

module.exports = router;

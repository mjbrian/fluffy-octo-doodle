var express = require('express');
var router = express.Router();

const landing = require('../controllers/landing');

router.get('/', landing.get_landing);
router.post('/', landing.submit_lead)
router.get('/leads', landing.show_leads);
// ':lead_id' represents an arg in the uri
// ':lead_id' gets passed to landing.show_lead
router.get('/lead/:lead_id', landing.show_lead);
router.get('/lead/:lead_id/edit', landing.show_edit_lead);
router.post('/lead/:lead_id/edit', landing.edit_lead);
router.post('/lead/:lead_id/delete', landing.delete_lead);
router.post('/lead/:lead_id/delete-json', landing.delete_lead_json);

module.exports = router;

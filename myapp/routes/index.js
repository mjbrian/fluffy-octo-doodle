var express = require('express');
var router  = express.Router();

const landing   = require('../controllers/landing');
const user      = require('../controllers/user');
const leads     = require('../controllers/leads');


// index
router.get('/', landing.get_landing);
router.post('/', leads.submit_lead);

// user
router.get('/login', user.show_login);
router.get('/signup', user.show_signup);

// leads
router.get('/leads', leads.show_leads);

// lead 
// ':lead_id' represents an arg in the uri
// ':lead_id' gets passed to leads.show_lead
router.get('/lead/:lead_id', leads.show_lead);
router.get('/lead/:lead_id/edit', leads.show_edit_lead);
router.post('/lead/:lead_id/edit', leads.edit_lead);
router.post('/lead/:lead_id/delete', leads.delete_lead);
router.post('/lead/:lead_id/delete-json', leads.delete_lead_json);

module.exports = router;

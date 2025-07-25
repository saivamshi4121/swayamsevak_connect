const express = require('express');
const router = express.Router();
const shakhaController = require('../controllers/shakhaController');
const auth = require('../middleware/auth');

// All routes require authentication
router.post('/', auth, shakhaController.createShakha);
router.get('/', auth, shakhaController.getAllShakhas);
router.get('/:id', auth, shakhaController.getShakha);
router.put('/:id', auth, shakhaController.updateShakha);
router.delete('/:id', auth, shakhaController.deleteShakha);

module.exports = router; 
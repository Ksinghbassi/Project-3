const express = require('express');
const router = express.Router();
const bloggersCtrl = require('../../controllers/api/bloggers')
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', bloggersCtrl.index);
router.post('/', ensureLoggedIn, bloggersCtrl.create);
router.get('/:id', bloggersCtrl.show);
router.put('/:id', ensureLoggedIn, bloggersCtrl.update);
router.delete('/:id', ensureLoggedIn, bloggersCtrl.delete);


module.exports = router;
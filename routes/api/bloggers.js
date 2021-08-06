const express = require('express');
const router = express.Router();
const bloggersCtrl = require('../../controllers/api/bloggers')


router.get('/', bloggersCtrl.index);
router.post('/', bloggersCtrl.create);
router.get('/:id', bloggersCtrl.show);
router.put('/:id',  bloggersCtrl.update);
router.delete('/:id',  bloggersCtrl.delete);


module.exports = router;
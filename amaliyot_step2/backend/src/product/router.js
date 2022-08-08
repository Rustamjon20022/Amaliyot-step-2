const router = require('express').Router();
const validate = require('express-validation');
const Controller = require("./controller")
const Validator = require('./validator');

router.route('/').get(Controller.findAll);
router.route('/:id').get(Controller.findOne);
router.route('/').post(validate(Validator.addNew), Controller.addNew);
router.route('/:id').put(validate(Validator.updateOne), Controller.updateOne);
router.route('/:id').delete(validate(Validator.deleteOne), Controller.deleteOne);
router.route('/reduce/:id').put(validate(Validator.updateQuantity), Controller.updateQuantity);

module.exports = router;

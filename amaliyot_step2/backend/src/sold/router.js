const router = require('express').Router();
const validate = require('express-validation');
const Controller = require("./controller")
const Validator = require('./validator');

router.route('/').get(Controller.findAll);
router.route('/:id').get(Controller.findOne);
router.route('/').post(Controller.addNew);
router.route('/:id').put(validate(Validator.updateOne), Controller.updateOne);
router.route('/:id').delete(validate(Validator.deleteOne), Controller.deleteOne);

module.exports = router;

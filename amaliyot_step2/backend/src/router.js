const express = require('express');
const router = express.Router();

const userRouter = require('./user/router');
const productRouter = require('./product/router');
const soldRouter = require('./sold/router');

router.use('/user', userRouter);
router.use('/product', productRouter);
router.use('/sold', soldRouter);

module.exports = router;
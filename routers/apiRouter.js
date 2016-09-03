
var express = require('express');
var apiRouter = express.Router();
var bookingsRouter = require('./api/bookingsRouter');
var floorsRouter = require('./api/floorsRouter');

apiRouter.use('/floors',floorsRouter );
apiRouter.use('/bookings',bookingsRouter  );

module.exports=apiRouter;
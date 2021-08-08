// Import controlers
const authController = require('./controllers/authController');
const userController = require('./controllers/userController');
const checkUserFn = require('./middlewares/checkUserFn');
const checkUserFnSolution = require('./middlewares/checkUserFnSolution');
const validateFn = require('./middlewares/validateFn');
const verifyFn = require('./middlewares/verifyFn');
const log4js = require('./log4js');



// Match URL's with controllers
exports.appRoute = router => {

    router.post('/api/user/login', authController.processLogin);
    router.post('/api/user/register', authController.processRegister);
    router.post('/api/user/process-submission', userController.processDesignSubmission);
    router.put('/api/user/', userController.processUpdateOneUser);
    router.put('/api/user/design/', verifyFn.verifyTokenUserID, validateFn.validateUpdateSubmission,userController.processUpdateOneDesign);
    //router.put('/api/user/design/', userController.processUpdateOneDesign);
    router.post('/api/user/processInvitation/', userController.processSendInvitation);

    router.get('/api/user/process-search-design/:pagenumber/:search?', userController.processGetSubmissionData);
    router.get('/api/user/process-search-user/:pagenumber/:search?',  userController.processGetUserData);
    router.get('/api/user/process-search-user-design/:pagenumber/:search?', userController.processGetSubmissionsbyEmail);
    router.get('/api/user/:recordId', userController.processGetOneUserData);
    router.get('/api/user/design/:fileId', userController.processGetOneDesignData);

};
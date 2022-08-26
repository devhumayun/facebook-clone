import express from 'express'
import { accountVerified, allUser, createUser, deleteUser, getLoggedInUser, singleUser, updateUser, userLogin, recoverPassword, resetPassword } from '../controllers/userController.js';
import { adminMiddleware } from '../middlewares/adminMiddleware.js';
import { authMiddleware } from '../middlewares/authMiddlewares.js';
import { userhMiddleware } from '../middlewares/userMiddleware.js';
const router = express.Router();


router.route('/me').get(getLoggedInUser);
router.route('/login').post(userLogin);
router.route('/register').post(createUser);
router.route('/verify').post(accountVerified);
router.route('/recover-password').post(recoverPassword);
router.route('/reset-password').post(resetPassword);

// students route manage
router.route('/').get( authMiddleware, allUser).post(authMiddleware, createUser)
router.route('/:id').get(adminMiddleware, singleUser).patch(userhMiddleware, updateUser).put( adminMiddleware,updateUser).delete(adminMiddleware, deleteUser)



export default router
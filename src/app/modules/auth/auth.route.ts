import express from 'express';
import { authController } from './auth.controller';
import validationRequest from '../../middleware/validedRequest';

import { authValidation } from './auth.validation';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../user/user.constant';
const router = express.Router();

// will call controller function

router.post(
  '/login',
  validationRequest(authValidation.loginSchemaValidation),
  authController.loginUser,
);
router.post(
  '/change-password',
  auth(USER_ROLE.admin, USER_ROLE.faculty, USER_ROLE.student),
  validationRequest(authValidation.changePasswordSchemaValidation),
  authController.chnagePassword,
);
router.post(
  '/refresh-token',
  validationRequest(authValidation.refreshTokenValidations),
  authController.refreshToken,
);

export const AuthRoutes = router;
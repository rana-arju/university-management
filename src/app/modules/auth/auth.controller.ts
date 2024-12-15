import { authServices } from './auth.service';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import { JwtPayload } from 'jsonwebtoken';
import config from '../../config';

const loginUser = catchAsync(async (req, res) => {
  // will call service func to send this data
  const result = await authServices.loginUsertIntoDB(req.body);
  const { refreshToken, needsPasswordChange, accessToken } = result;

  res.cookie('refreshToken', refreshToken, {
    secure: config.node_env === 'production',
    httpOnly: true,
  });

  // send response

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'user logged in successful',
    data: {
      accessToken,
      needsPasswordChange,
    },
  });
});
const chnagePassword = catchAsync(async (req, res) => {
  // will call service func to send this data
  const { ...passwordData } = req.body;
  const userData = req?.user;
  const result = await authServices.passwordChnageIntoDB(
    userData as JwtPayload,
    passwordData,
  );

  // send response

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Password updated successful',
    data: result,
  });
});
const refreshToken = catchAsync(async (req, res) => {
  // will call service func to send this data
  const { refreshToken } = req.cookies;

  const result = await authServices.refreshTokenFromCookie(refreshToken);

  res.cookie('refreshToken', refreshToken, {
    secure: config.node_env === 'production',
    httpOnly: true,
  });

  // send response

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'access token get successful',
    data: result,
  });
});
export const authController = {
  loginUser,
  chnagePassword,
  refreshToken,
};

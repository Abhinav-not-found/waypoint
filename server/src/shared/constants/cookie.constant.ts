import type { CookieOptions } from 'express';
import env from '@/shared/config/env.config.js';

const cookie: {
  accessTokenOpts: CookieOptions;
  refreshTokenOpts: CookieOptions;
} = {
  accessTokenOpts: {
    httpOnly: true,
    secure: env.IS_PROD,
    sameSite: env.IS_PROD ? 'strict' : 'lax',
    path: '/',
    maxAge: env.IS_PROD ? 1000 * 60 * 5 : 1000 * 60 * 5,
  },
  refreshTokenOpts: {
    httpOnly: true,
    secure: env.IS_PROD,
    sameSite: env.IS_PROD ? 'strict' : 'lax',
    path: '/',
    maxAge: env.IS_PROD ? 1000 * 60 * 60 : 1000 * 60 * 60,
  },
};

export default cookie;

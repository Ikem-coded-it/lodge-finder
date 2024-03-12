import {
    handleAuth,
    handleLogin,
    handleCallback,
    handleLogout,
    handleProfile,
    withApiAuthRequired,
    withPageAuthRequired,
    getSession,
    getAccessToken
  } from '@auth0/nextjs-auth0';

export const GET = handleAuth({
    login: handleLogin({
      returnTo: "/dashboard/vacancies",
      authorizationParams: {
        prompt: "login",
      },
    }),

    signup: handleLogin({
      authorizationParams: {
        user: "singup",
        screen_hint: "signup",
        prompt: "login",
      },
      returnTo: "/auth/complete-signup"
    }),
    
    logout: handleLogout({
      returnTo: "/",
    })
  });
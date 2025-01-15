# Next.js Infinite Redirect Loop Bug

This repository demonstrates a common bug in Next.js applications: an infinite redirect loop caused by attempting to navigate to the current route using `router.push()`.  The bug occurs when the component tries to redirect to the route it is already on, causing a continuous redirect loop. 

## Bug Description
The `MyComponent` attempts to redirect to the root path ('/') using `router.push('/')`. If the application is already at the root path, this causes an infinite loop of redirects, resulting in a broken user experience.

## Solution
To avoid this issue, check the current route before attempting to redirect.  The provided solution uses `router.asPath` to check the current route and only redirects if the current route is different from the target route.

## How to reproduce
1. Clone this repo.
2. Run `npm install`
3. Run `npm run dev`
4. Click the button. If already on the root page, the browser will experience an infinite redirect loop.  If you are not on the root page the redirect will work as expected

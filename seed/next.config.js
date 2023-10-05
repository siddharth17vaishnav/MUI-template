/**
 * @type {import('next').NextConfig}
 */

const withTM = require('next-transpile-modules')(['@babel/preset-react']);

const nextConfig = withTM({
  reactStrictMode: true,
  images: {
    domains: ['flagcdn.com']
  },
  // added here to access .env variables outside of pages directory.
  env: {
    REACT_APP_VERSION: process.env.REACT_APP_VERSION,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL
  }
});

module.exports = {
  nextConfig,
  async redirects() {
    // redirect - default first page should be `login` when root URL like http://example.com/
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true
      }
    ];
  }
};

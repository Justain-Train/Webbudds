/** @type {import('next').NextConfig} */


module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
      },
    ],
  },

  webpack(config) {
    config.module.rules.push({
      test : /\.svg$/,
      use: [{loader: '@svgr/webpack', options: {icon: true } }],
    });
    return config;
  },
}



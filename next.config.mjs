/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.(mp3)$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: '/_next/static/sounds/',
            outputPath: `${isServer ? '../' : ''}static/sounds/`,
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
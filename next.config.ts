// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      rules: {
        // Necesario para Tailwind CSS v4 con Turbopack
        '*.css': {
          loaders: ['postcss-loader'],
          as: '*.css'
        }
      }
    }
  }
}

module.exports = nextConfig
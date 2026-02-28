/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/cv',
        destination:
          'https://drive.google.com/file/d/1q3j9AXMy7Uaq_SMzFQxldvMVcZuYCWX9/view',
        permanent: false,
      },
      {
        source: '/cv-br',
        destination:
          'https://drive.google.com/file/d/1WoghjNpWHd60aQY3YQGDHs7kUSyUXh9y/view',
        permanent: false,
      },
      {
        source: '/gh',
        destination: 'https://github.com/gmartins-dev',
        permanent: false,
      },
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/gmartins-dev/',
        permanent: false,
      },
      {
        source: '/email',
        destination: 'mailto:guilhermemm.dev@gmail.com',
        permanent: false,
      },
      {
        source: '/links',
        destination: 'https://gmartins-links.vercel.app/',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig

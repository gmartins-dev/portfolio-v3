/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/cv',
        destination:
          'https://drive.google.com/file/d/16hUsXojLpXhZh2BzqD6FZGgQ8VI-M1YD/view?usp=sharing',
        permanent: false,
      },
      {
        source: '/cv-ptbr',
        destination:
          'https://drive.google.com/file/d/1tORZmchZY9K5EXQjwUfwmr2_FrCzfSlL/view?usp=sharing',
        permanent: false,
      },
      {
        source: '/gh',
        destination: 'https://github.com/guilhermemm-dev',
        permanent: false,
      },
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/guilhermemm-dev/',
        permanent: false,
      },
      {
        source: '/email',
        destination: 'mailto:guilhermemm.dev@gmail.com',
        permanent: false,
      },
      {
        source: '/links',
        destination: 'https://nextjs13-linktree.vercel.app',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig

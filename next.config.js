/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/cv',
        destination:
          'https://drive.google.com/file/d/1gv8ll6mRGQLqaWDVUp2BkzrknYa5bm-n',
        permanent: false,
      },
      {
        source: '/cv-ptbr',
        destination:
          'https://docs.google.com/document/d/1Wo-lHkdGAfOimdq0Bd0Lep75mmfgxWKn0OmNCRv2nag',
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
        destination: 'https://nextjs13-linktree.vercel.app',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig

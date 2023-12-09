/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/cv',
        destination:
          'https://drive.google.com/file/d/1eOT6ep4JS4ZrLauSJTNyEn_8sOZdpd1k',
        permanent: false,
      },
      {
        source: '/cv-ptbr',
        destination:
          'https://drive.google.com/file/d/18N4Y0UGHHLFYUJ_6qEsAl0TfwWjXQESr',
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

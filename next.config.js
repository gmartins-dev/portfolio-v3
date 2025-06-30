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
        source: '/cv-br',
        destination:
          'https://drive.google.com/file/d/1hYqF8R85qGP5qT5kWuC4n2XmVFkO7soU',
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

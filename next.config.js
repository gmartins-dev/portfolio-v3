/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/cv",
        destination:
          "https://drive.google.com/file/d/1hIixG5lAJIKpFfTuKvNiVmtwk1vn4mJt/view",
        permanent: false,
      },
      {
        source: "/gh",
        destination: "https://github.com/guilhermemm-dev",
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig

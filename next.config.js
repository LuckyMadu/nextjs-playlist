module.exports = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: "/about",
        destination: "/",
        permanent: true,
      },
      {
        source: "/old/:id",
        destination: "/new/:id",
        permanent: true,
      },
    ];
  },
};

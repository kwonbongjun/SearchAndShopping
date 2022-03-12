module.exports = {
    async rewrites() {
      return [
        {
          source: '/v1/:v1*',
          destination: 'https://openapi.naver.com/v1/:v1*',
        },
      ]
    },
}
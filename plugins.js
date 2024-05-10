module.exports = ({ env }) => ({
    'transformer': {
      enabled: true,
      config: {
        responseTransforms: {
          removeAttributesKey: true,
          removeDataKey: true,
        },
      }
    },
    'free-mail-sender': {
      config: {
        provider: 'yandex',
      },
    },
  });
  
  
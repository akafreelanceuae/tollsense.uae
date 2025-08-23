module.exports = ({ config }) => {
  return {
    ...config,
    extra: {
      eas: {
        projectId: "00000000-0000-0000-0000-000000000000"
      }
    }
  };
};

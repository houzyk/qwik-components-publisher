const vite = require('vite');
const viteTsconfig = require('vite-tsconfig-paths');

const tsconfigPaths = viteTsconfig.default;

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: '@storybook/html',
  core: {
    builder: '@storybook/builder-vite',
  },
  viteFinal: async (config, options) => {
    const { qwikVite: qwikVite } = await import('@builder.io/qwik/optimizer');
    config.plugins?.unshift(qwikVite());
    return vite.mergeConfig(config, {
      plugins: [tsconfigPaths()],
    });
  },
  features: {
    storyStoreV7: true,
  },
};
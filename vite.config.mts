/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';
import { configDefaults, defineConfig } from 'vitest/config';

export default () =>
  defineConfig({
    // TODO solve the type issues with vite. The tests run fine though
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    plugins: [tsconfigPaths(), react()],
    resolve: {
      alias: [
        { find: 'sdk', replacement: resolve(__dirname, '../../packages/sdk') },
      ],
    },
    test: {
      environment: 'node',
      exclude: [...configDefaults.exclude, 'e2e'],
      globals: true,
    },
  });

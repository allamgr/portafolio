import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import cleaner from 'rollup-plugin-cleaner';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import postcss from "rollup-plugin-postcss";
import {terser} from 'rollup-plugin-terser';
import packageJson from './package.json';

const svgr = require('@svgr/rollup').default

const isProductionBuild = process.env.BUILD === 'production';

console.info('isProduction', isProductionBuild);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: (isProductionBuild ? false : true)
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: (isProductionBuild ? false : true)
    },
  ],
  plugins: [
    cleaner({
      targets: ['./dist'],
    }),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({exclude: ['**/*.stories.tsx', '**/*.test.tsx'], useTsconfigDeclarationDir: true }),
    postcss(),
    svgr(),
    (isProductionBuild && terser())
  ],
};
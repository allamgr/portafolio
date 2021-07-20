import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import cleaner from 'rollup-plugin-cleaner';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import postcss from "rollup-plugin-postcss";
import packageJson from './package.json';

const svgr =  require('@svgr/rollup').default

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    cleaner({
      targets: ['./lib'],
    }),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({exclude: ['**/*.stories.tsx', '**/*.test.tsx'], useTsconfigDeclarationDir: true }),
    postcss(),
    svgr({ native: true })
  ],
};
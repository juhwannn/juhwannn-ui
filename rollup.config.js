import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import babel from '@rollup/plugin-babel';
import strip from '@rollup/plugin-strip';
import postcssImport from 'postcss-import';

export default {
  input: 'src/index.js',
  output: [
    { file: 'dist/index.cjs.js', format: 'cjs', exports: 'named' },
    { file: 'dist/index.esm.js', format: 'esm' },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({ extensions: ['.js', '.jsx', '.json'] }),
    commonjs(),
    babel({
      extensions: ['.js', '.jsx'],
      babelHelpers: 'bundled',
      include: ['src/**/*'],
      presets: ['@babel/preset-react'],
    }),
    strip({
      include: 'src/**/*',
      directives: ['use client'],
    }),
    postcss({
      plugins: [postcssImport()],
      modules: true,
      extract: 'styles.css',
      inject: false,
    }),
  ],
};

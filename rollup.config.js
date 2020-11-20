import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'date.js',
    plugins: [terser()],
    output: {
        file: 'umd/date.js',
        format: 'umd',
        name: 'D',
        esModule: false
    }
  },
  {
    input: 'date.js',
    output: {
      file: 'esm/date.js',
      format: 'esm'
    }
  }
];
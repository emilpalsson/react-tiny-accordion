import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'umd'
  },
  name: 'ReactTinyAccordion',
  plugins: [
    babel(),
    uglify()
  ],
  sourcemap: true,
  external: [ 'react' ],
  globals: {
    react: 'React'
  }
}
import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import pkg from './package.json'

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
  external: Object.keys(pkg.peerDependencies || {}),
  globals: {
    react: 'React'
  }
}
import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import pkg from './package.json'

export default {
  input: 'src/index.js',
  external: Object.keys(pkg.peerDependencies || {}),
  output: {
    name: 'ReactTinyAccordion',
    file: 'dist/index.js',
    format: 'umd',
    globals: {
      react: 'React'
    }
  },
  plugins: [
    babel(),
    uglify()
  ]
}
module.exports = {
	'env': {
		'browser': true,
		'commonjs': true,
		'es6': true
	},
	'extends': ['eslint:recommended', 'plugin:react/recommended'],
	'parserOptions': {
		'ecmaFeatures': {
			'experimentalObjectRestSpread': true,
			'jsx': true
		},
		'sourceType': 'module'
	},
	'plugins': [
		'react',
		'react-hooks'
	],
	'parser': 'babel-eslint',
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': ['error', 'never'],
		'react/prop-types': 0,
		'no-mixed-spaces-and-tabs': 0,
		'space-before-blocks': 2,
		'object-curly-spacing': [2, 'always'],
		'space-before-function-paren': 2,
		'computed-property-spacing': 2,
		'func-call-spacing': 2,
		'space-in-parens': 2,
		'comma-spacing': 2,
		'array-bracket-spacing': 2,
		'no-console': 0,
		'no-multi-spaces': 2,
		'block-spacing': 2,
		'arrow-parens': 0,
		'no-throw-literal': 0,
		'react/display-name': 0,
		'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx'] }],
		'react/jsx-key': 0,
		'react/jsx-no-target-blank': [1, { 'enforceDynamicLinks':  'never' }],
		'react/react-in-jsx-scope': 0,
		'react-hooks/rules-of-hooks': 'error', // 检查 Hook 的规则
		'react-hooks/exhaustive-deps': 'warn' // 检查 effect 的依赖
	}
}

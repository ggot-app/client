module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'parserOptions': {
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    'rules': {
        'semi': [
            'error',
            'always',
        ],
        'eol-last': [
            'error',
            'always'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'no-undef': 'off',
        'no-unused-vars': 'off'
    }
};

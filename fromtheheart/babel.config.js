module.exports = {
    presets: ['module:metro-react-native-babel-preset', 'module:react-native-dotenv'],
    plugins: [
        // ['@babel/plugin-transform-modules-commonjs', {
        // 	strictMode: false,
        // 	allowTopLevelThis: true,
        // 	loose: true,
        // }],
        ['module-resolver', {
            root: ['./src'],
            alias: {
                'root': './',
                'assets': './src/assets',
                'components': './src/components',
                'config': './src/config',
                'hooks': './src/hooks',
                'styles': './src/styles',

                'modules': './src/modules',
                'context': './src/context',
                'helpers': './src/helpers',
                'schemas': './src/schemas',
                'services': './src/services',

                // Modules
                // 'auth': './src/modules/auth',
                // 'core': './src/modules/core',
                // 'schedule': './src/modules/schedule',
                // 'lead': './src/modules/lead',
                // 'synchronize': './src/modules/synchronize',
                // 'blitz': './src/modules/blitz',
                // 'customerService': './src/modules/customerService',
                // 'partnership': './src/modules/partnership',
                // 'notification': './src/modules/notification',
                // 'score': './src/modules/score'
            },
        }]
    ]
};
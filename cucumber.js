// module.exports = {
//     default: {
//         require: ['features/step_definitions/*.js', 'features/support/*.js'],
//         format: ['progress'],
//         paths: ['features/*.feature']
//     }
// };

module.exports = {
    default: {
        require: ['features/step_definitions/*.js', 'features/support/*.js'],
        format: [
            'progress',
            'json:cucumber-report.json'
        ],
        paths: ['features/*.feature']
    }
};
Package.describe({
    name: 'rozzzly:lodash',
    summary: 'Collection of small helpers: _.map, _.each, ...',
    version: '3.10.1',
    git: 'https://github.com/rozzzly/meteor-lodash-replace-underscore'
});


Npm.depends({'lodash': '3.10.1'});

Package.onUse(function(api) {
    api.use('universe:modules-npm');

    api.addFiles('deps.npm.json', ['client', 'server']);
});

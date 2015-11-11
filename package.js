Package.describe({
    name: 'rozzzly:lodash',
    summary: 'Collection of small helpers: _.map, _.each, ...',
    version: '3.10.1',
    git: 'https://github.com/rozzzly/meteor-lodash-replace-underscore'
});

Npm.depends({'lodash': '3.10.1'});

Package.onUse(function(api) {
    api.use('cosmos:browserify');

    api.addFiles('client.browserify.js', 'client');
    api.addFiles('server.js', 'server');

    api.export('lodash', ['client', 'server']);
});

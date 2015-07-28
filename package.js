Package.describe( {
    summary: "Smart package for Meteor that adds filter and pager behavior to our Meteor's collections.",
    version: "0.2.2",
    name: 'parhelium:filter-collections',
    git: "https://github.com/parhelium/filter-collections"
} );

Package.onUse( function ( api ) {
    api.versionsFrom( 'METEOR@0.9.2.2' );

    var all = ['client', 'server'];
    api.use( [
        'underscore',
    ], all );

    api.addFiles( 'filter-collections-client.js', ['client'] );
    api.addFiles( 'filter-collections-server.js', ['server'] );
} );

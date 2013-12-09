/*Ext.Loader.setConfig({
	enabled: true
});*/


Ext.application({
    views: [
        'MainView',
    ],
    controllers: [
        'Navigation'
      /*'Test'
       */
    ],

    models: ['Risk'],
    stores: ['Risks'],
    name: 'Rat',

    launch: function() {
        Ext.create('Rat.view.MainView');
    }
});




/*Ext.application({
    name: 'Rat',
	autoCreateViewport: true,
		
    models: ['Risk'],
    stores: ['Risks'],
	controllers: ['Test'],

	launch: function() {

    }
});*/
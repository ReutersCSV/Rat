Ext.define('Rat.store.Risks', {
    extend: 'Ext.data.Store',

    requires: [ 		'Rat.model.Risk' 	],
	
    model: 'Rat.model.Risk',
	autoLoad: true,
    storeId: 'Risks',

	proxy: {
        type: 'ajax',
        url: 'data/RiskTestData.json',
        reader: {
            type: 'json',
            root: 'results'
        }
    }
});
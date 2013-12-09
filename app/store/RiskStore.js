Ext.define('Rat.store.Risks', {
    extend: 'Ext.data.Store',

    requires: [ 		'Rat.model.Risk' 	],
	
    model: 'Rat.model.Risk',
	autoLoad: true,
    // Overriding the model's default proxy
    data : [
         {name: 'Dave'}
    ]

//	 proxy: {
//        type: 'ajax',
//        url: 'data/TestRisk.json',
//        reader: {
//            type: 'json',
//            root: 'results'
//        }
//    }
});
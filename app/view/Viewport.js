//Ext.require('Rat.view.Five');

Ext.define('Rat.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.layout.container.Fit',
        'Rat.view.Main',
        'Rat.store.Risks',
        'Rat.view.DashboardView',
        'Rat.view.EventUpload',
    ],

    layout: {
        type: 'fit'
    },

    items: [{
        xtype: 'app-main'
    }]
});




/*var toby = Ext.create('Ext.Panel', {
	title: 'Toby',
	layout: {
		type: 'table',
		columns: 1
	},
    defaults: {frame:true, width:200, height: 50},
	items: [{
		title: 'toby1'
	}, {
		title: 'toby2'
	}]
});

var likes = Ext.create('Ext.Panel', {
	title: 'Likes',
	html: '&lt;empty panel&gt;',
	cls:'empty'
});

var big = Ext.create('Ext.Panel', {
	title: 'Big',
	html: '&lt;empty panel&gt;',
	cls:'empty'
});

var men = Ext.create('Ext.Panel', {
	title: 'Men',
	html: '&lt;empty panel&gt;',
	cls:'empty'
});

Ext.define('Rat.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout:'border',
	
	requires: [
		'Rat.view.EventUpload',
		'Rat.store.Risks',
		'Rat.view.RiskGrid'
	],
				
//	layout: 'fit',
	items: [{
		type: 'panel',
		title: 'God\'s Truth',
		collapsible: true,
		region:'west',
		margins:'5 0 5 5',
		split:true,
		width: 210,
		layout:'accordion',
		items: [toby, likes, big, men]
	}, {
		region:'center',
		margins:'5 5 5 0',
		cls:'empty',
		bodyStyle:'background:#f1f1f1',
		items: [{
			//xtype:'eventUpload'
			xtype:'riskGrid'
		}]
	}]
});*/

Ext.define('Rat.view.EventUpload', {
	extend: 'Ext.Panel',
	alias: 'widget.eventUpload',
    xtype: 'widget.eventUpload',
	layout: 'vbox',
	bodyPadding: 4,
	border: 0,
	requires: [
		'Ext.form.field.File'
	],
	items: [{
	    xtype: 'panel',
		title: 'Event Data File',
		bodyPadding: 4,
		layout: 'hbox',
		items: [{
			xtype: 'filefield',
			width: 400,
			fieldLabel: 'Spreadsheet'
		}]
	}]
});

Ext.define('Rat.controller.Test', {
    extend: 'Ext.app.Controller',
    init: function() {
		this.control({
			'five button[hewing=benning]': {
				click: this.onMoreValueAdded
			}
		});
    },
	
	onValueAdded: function() {
		console.log('Benning received');
	},
	
	onMoreValueAdded: function() {
		Ext.Msg.alert('Megabenning received', 'Tobys shaved balls');
	}
});

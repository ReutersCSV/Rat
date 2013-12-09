
Ext.define('Rat.controller.Navigation', {
    extend: 'Ext.app.Controller',

    refs: [
        {
            ref: 'contentPanel',
            selector: '#contentPanel'
        },
        {
            ref: 'menu',
            selector: '#menu'
        }
    ],

    onLaunch: function() {

        /**
        * The following code implements simple navigation by
        * using the URL hash (#) to indicate the active view
        *
        * The following values are always equal
        * hash = active menu 'itemId' = active panel 'itemId' + 'Panel'
        */

        // Use var for controller
        var ctrl = this;

        // Init the Ext history utility
        Ext.History.init();

        // Navigate on hash change
        Ext.History.on('change', function(hash) {
            ctrl.navigate(hash);
        });

        // Navigate if initial hash is provided
        var hash = window.location.hash;
        if (hash) {
            ctrl.navigate(hash);
        }

    },

    navigate: function(id) {

        // Remove # from id if present
        if (id[0] == '#') id = id.slice(1);

        // Get views
        var menu = this.getMenu(),
            content = this.getContentPanel();

        // Set active view
        content.layout.setActiveItem(id + 'Panel');

        // Set menu and page title
        // Iterate through each menu item
        this.getMenu().items.each(function(item) {

            // Active
            if (item.href == '#' + id) {
                // Disable
                item.disable();
                // Set page title to menu item text
                window.document.title = item.text;
            }

            // Inactive
            else {
                item.enable();
            }
        });
    }
});

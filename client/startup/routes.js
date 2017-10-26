import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// import '../../ui/pages/candidates.js';

// Default route
FlowRouter.route('/', {
  name: 'candidates',
  action() {
    BlazeLayout.render('layout_main', {
        nav: 'layout_header',
        main: 'candidates',
        footer: 'layout_footer',
    });
  },
});
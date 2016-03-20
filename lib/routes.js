FlowRouter.route('/', {
	name: 'home',
	action(){
		GAnalytics.pageview();
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/recipebook', {
	name: 'recipe-book',
	action(){
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main:'Recipes'});
	}
});
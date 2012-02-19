// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults


$(document).ready(function() {
	
	

	window.MainView = Backbone.View.extend({
		
		
		
		
		
		initialize: function() {
			
			_.bindAll(this, "render");
			this.mainTemplate = $("#main-template").html();
			this.render().el;			
		},
		
		render: function() {
			$(this.el).html(this.mainTemplate);
			return this;
		}	
		
		
	});
	
	
	
	
	window.AppRouter = Backbone.Router.extend({
		
		routes: {
			'home': 'home',
			'vision': 'vision',
			'life-groups': 'lifegroups',
			'seo': 'seo'
		},
		
		
		initialize: function() {
			
			this.content = $("#backbone-content");
			mainTemplate = _.template($("#main-template").html());
			this.content.empty();
			this.content.html(mainTemplate).hide().fadeIn('fast');
			
			
			
		},
		
		home: function() {
			
			this.content = $("#backbone-content");
			mainTemplate = _.template($("#main-template").html());
			this.content.empty();
			this.content.html(mainTemplate).hide().fadeIn('fast');
			
			
		},
		
		vision: function() {			
			this.content = $("#backbone-content");
			this.content.empty();
			visionTemplate = _.template($("#vision-template").html());
			
			this.content.html(visionTemplate);
		},
		
		lifegroups: function() {
			this.content = $("#backbone-content");
			this.content.empty();
			lifeTemplate = _.template($("#life-group-template").html());
			this.content.html(lifeTemplate);
			
		},
		
		
		seo: function() {
			this.content = $("#backbone-content");
			this.content.empty();
			seoTemplate = _.template($("#seo-template").html());
			this.content.html(seoTemplate);
		}
		
		
		
		
	});
	
	
	
	
	
	App = new AppRouter();
	Backbone.history.start();
	
	
	var make_button_active = function()
	{
	  //Get item siblings
	  var siblings =($(this).siblings());
	
	  //Remove active class on all buttons
	  siblings.each(function (index)
	    {
	      $(this).removeClass('active');
	    }
	  )
	
	
	  //Add the clicked button class
	  $(this).addClass('active');
	}
	
	$(".nav li").click(make_button_active);
	
	$(".navbar .brand").click(function(){
		$(".nav li").removeClass("active");		
		$("#menu_home").addClass('active');
	})

	
});// closing jQuery 







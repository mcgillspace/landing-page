(function () {

	angular
	.module('app')
	.config(configRoutes);

	configRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

	function configRoutes($stateProvider, $urlRouterProvider) {
		$stateProvider
		// .state('navbar', {
		// 	abstract : true,
		// 	views : {
		// 		'navbar' : {
		// 			templateUrl: '/templates/navbar/main.html'
		// 		},
		// 		'content' : {
		// 			template: '<div ui-view="content"></div>'
		// 		}
		// 	}
		//
		// })
		.state('index', {
			url : "/",
			views : {
				'navbar' : {
					templateUrl: '/landing-page/templates/navbar/main.html'
				},
				'banner' : {
					controller: 'BannerCtrl',
					templateUrl: '/landing-page/templates/index/banner.html'
				},
				'content' : {
					templateUrl: '/landing-page/templates/index/main.html'
				}
			}
		})
		.state('about', {
			url : "/about",
			views : {
				'navbar' : {
					templateUrl: '/landing-page/templates/navbar/main.html'
				},
				'banner' : {
					templateUrl: '/landing-page/templates/about/banner.html'
				},
				'content' : {
					templateUrl: '/landing-page/templates/about/main.html'
				}
			}
		})
		.state('about-csdc', {
			url : "/about/csdc",
			views : {
				'navbar' : {
					templateUrl: '/landing-page/templates/navbar/main.html'
				},
				'banner' : {
					templateUrl: '/landing-page/templates/about/banner.html'
				},
				'content' : {
					templateUrl: '/landing-page/templates/about/csdc.html'
				}
			}
		})
		.state('about-mssg', {
			url : "/about/mssg",
			views : {
				'navbar' : {
					templateUrl: '/landing-page/templates/navbar/main.html'
				},
				'banner' : {
					templateUrl: '/landing-page/templates/about/banner.html'
				},
				'content' : {
					templateUrl: '/landing-page/templates/about/mssg.html'
				}
			}
		})
		.state('about-education', {
			url : "/about/education",
			views : {
				'navbar' : {
					templateUrl: '/landing-page/templates/navbar/main.html'
				},
				'banner' : {
					templateUrl: '/landing-page/templates/about/banner.html'
				},
				'content' : {
					templateUrl: '/landing-page/templates/about/education.html'
				}
			}
		})
		.state('about-policy', {
			url : "/about/policy",
			views : {
				'navbar' : {
					templateUrl: '/landing-page/templates/navbar/main.html'
				},
				'banner' : {
					templateUrl: '/landing-page/templates/about/banner.html'
				},
				'content' : {
					templateUrl: '/landing-page/templates/about/policy.html'
				}
			}
		})
		.state('about-contact', {
			url : "/about/contact",
			views : {
				'navbar' : {
					templateUrl: '/landing-page/templates/navbar/main.html'
				},
				'banner' : {
					templateUrl: '/landing-page/templates/about/banner.html'
				},
				'content' : {
					templateUrl: '/landing-page/templates/about/contact.html'
				}
			}
		})
		.state('competitions', {
			url : "/competitions",
			views : {
				'navbar' : {
					templateUrl: '/landing-page/templates/navbar/main.html'
				},
				'banner' : {
					templateUrl: '/landing-page/templates/competitions/banner.html'
				},
				'content' : {
					templateUrl: '/landing-page/templates/under-construction.html'
					// templateUrl: '/landing-page/templates/competitions/main.html'
				}
			}
		})
		.state('competitions-csdc', {
			url : "/competitions/csdc",
			views : {
				'navbar' : {
					templateUrl: '/landing-page/templates/navbar/main.html'
				},
				'banner' : {
					templateUrl: '/landing-page/templates/competitions/banner.html'
				},
				'content' : {
					templateUrl: '/landing-page/templates/under-construction.html'
					// templateUrl: '/landing-page/templates/competitions/csdc.html'
				}
			}
		})
		.state('competitions-seds', {
			url : "/competitions/seds",
			views : {
				'navbar' : {
					templateUrl: '/landing-page/templates/navbar/main.html'
				},
				'banner' : {
					templateUrl: '/landing-page/templates/competitions/banner.html'
				},
				'content' : {
					templateUrl: '/landing-page/templates/under-construction.html'
					// templateUrl: '/landing-page/templates/competitions/seds.html'
				}
			}
		})
		.state('research', {
			url : "/research",
			views : {
				'navbar' : {
					templateUrl: '/landing-page/templates/navbar/main.html'
				},
				'banner' : {
					templateUrl: '/landing-page/templates/research/banner.html'
				},
				'content' : {
					templateUrl: '/landing-page/templates/under-construction.html'
					// templateUrl: '/landing-page/templates/research/main.html'
				}
			}
		})
		.state('research-design-projects', {
			url : "/research/design-projects",
			views : {
				'navbar' : {
					templateUrl: '/landing-page/templates/navbar/main.html'
				},
				'banner' : {
					templateUrl: '/landing-page/templates/research/banner.html'
				},
				'content' : {
					templateUrl: '/landing-page/templates/under-construction.html'
					// templateUrl: '/landing-page/templates/research/design-projects.html'
				}
			}
		})
		.state('research-academic-papers', {
			url : "/research/academic-papers",
			views : {
				'navbar' : {
					templateUrl: '/landing-page/templates/navbar/main.html'
				},
				'banner' : {
					templateUrl: '/landing-page/templates/research/banner.html'
				},
				'content' : {
					templateUrl: '/landing-page/templates/under-construction.html'
					// templateUrl: '/landing-page/templates/research/academic-papers.html'
				}
			}
		})
		.state('sponsorships', {
			url : "/sponsorships",
			views : {
				'navbar' : {
					templateUrl: '/landing-page/templates/navbar/main.html'
				},
				'banner' : {
					templateUrl: '/landing-page/templates/sponsorships/banner.html'
				},
				'content' : {
					templateUrl: '/landing-page/templates/under-construction.html'
					// templateUrl: '/landing-page/templates/sponsorships/main.html'
				}
			}
		})

		$urlRouterProvider.otherwise('/');
	}

})()

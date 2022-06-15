const initSlick = ($, Drupal) => {
	jQuery(document).ready(function () {
		let categoriesMore = document.querySelectorAll(
			".view-categories-sons .view-more-category .view-content"
		);

		const settings = {
			infinite: false,
			rows: 4,
			slidesToShow: 1,
			slidesToScroll: 1,
			mobileFirst: true,
			autoplay: false,
			dots: false,
			arrows: true,
			responsive: [
				{
					breakpoint: 768,
					settings: "unslick"
				}
			]
		};

		//slide edit resize
		if (window.matchMedia("(max-width: 768px)").matches) {
			setTimeout(function () {
				categoriesMore.forEach(element => {
					if (!!element && element != null) $(element).not('.slick-initialized').slick(settings);
				});
			}, 2000);
		}

		window.addEventListener("resize", () => {
			if (window.matchMedia("(max-width: 768px)").matches) {
				setTimeout(function () {
					categoriesMore.forEach(element => {
						if (!!element && element != null) $(element).not('.slick-initialized').slick(settings)
					});
				}, 2000);
			}
		});
	});


	/// Slider para thought leaders
	$('.block-views-blocktrending-google-home-block-1 .view-content').slick({
		infinite: false,
		rows: 5,
		slidesToShow: 1,
		slidesToScroll: 1,
		mobileFirst: true,
		autoplay: false,
		dots: false,
		arrows: true,
	})

	/// Slider para interna de noticias
	console.log("hola");
	// $('.cke-ig').slick({
	// 	autoplay: true,
	// 	autoplaySpeed: 3000,
	// 	infinite: true,
	// 	slidesToShow: 2,
	// 	slidesToScroll: 1,
	// 	centerPadding: "60px",
	// 	centerMode: true,
	// 	variableWidth: true,
	// 	dots: true,
	// 	mobileFirst: true,
	// 	responsive: [
	// 		{
	// 			breakpoint: 1300,
	// 			settings: "reInit"
	// 		},
	// 		{
	// 			breakpoint: 992,
	// 			settings: "reInit"
	// 		},
	// 		{
	// 			breakpoint: 768,
	// 			settings: "reInit"
	// 		}
	// 	]
	// })

	$('.cke-ig').slick();

	// slide landing jobs
	$(
		".block-views-blockcarousel-jobs-landing-block-1 .brands-carousel-wrapper .view-content"
	).slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}
		]
	});

	// slide landing videos
	$(
		".block-views-blockcarousel-videos-landing-block-2 .view-id-carousel_videos_landing .view-content"
	).slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					variableWidth: true
				}
			},
		]
	});

	//slide about al dia events
	if ($(".about-al-dia-live-slider").length) {
		$(".about-al-dia-live-slider ul").slick({
			autoplay: true,
			autoplaySpeed: 3000,
			infinite: true,
			slidesToShow: 2,
			slidesToScroll: 1,
			centerPadding: "60px",
			centerMode: true,
			variableWidth: true,
			dots: true,
			mobileFirst: true,
			responsive: [
				{
					breakpoint: 1300,
					settings: "reInit"
				},
				{
					breakpoint: 992,
					settings: "reInit"
				},
				{
					breakpoint: 768,
					settings: "reInit"
				}
			]
		});
	}

	//slide about al dia testimonial
	if ($(".block-views-blockabout-al-dia-live-block-4")) {
		$(".block-views-blockabout-al-dia-live-block-4 .view-content").slick({
			autoplay: true,
			autoplaySpeed: 10000,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true
		});
	}

	/// Slider para thought leaders
	if ($(".view-id-thought_leaders_home.view-display-id-block_1").length) {

		const settingThoughtLeaders = {
			infinite: false,
			variableWidth: true,
			slidesToShow: 2,
			slidesToScroll: 1,
			autoplaySpeed: 3000,
			mobileFirst: true,
			responsive: [
				{
					breakpoint: 1024,
					settings: "unslick"
				},
			]
		}
		/* 
				const mobileWidth = 768;
		
				const resizeObserver = new ResizeObserver(entries => {
					for (let entry of entries) {
						let currentWidth = entry.contentBoxSize[0].inlineSize;
		
						if(currentWidth > mobileWidth) return;
						if($(".view-id-thought_leaders_home.view-display-id-block_1 .view-content").hasClass("slick-initialized")) return;
		
						if(currentWidth <= mobileWidth){   
							$(".view-id-thought_leaders_home.view-display-id-block_1 .view-content").not('.slick-initialized').slick(settingThoughtLeaders);
						}
					}
				});
		
				resizeObserver.observe(document.querySelector('body')); */


		//slide edit resize 
		if (window.matchMedia("(max-width: 1024px)").matches) {
			$(".view-id-thought_leaders_home.view-display-id-block_1 .view-content").not('.slick-initialized').slick(settingThoughtLeaders);
		}

		window.addEventListener("resize", () => {
			if (window.matchMedia("(max-width: 1024px)").matches) {
				$(".view-id-thought_leaders_home.view-display-id-block_1 .view-content").not('.slick-initialized').slick(settingThoughtLeaders);
			}
		});
	}

	// slider interna eventos modo de vista

	const slider_general = {
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3500,
		//variableWidth: true
	};

	const slider_one = {
		...slider_general,
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: false,
		responsive: [
			{
				breakpoint: 769,
				settings: {
					variableWidth: true
				}
			},
		]
	};

	const slider_two = {
		...slider_general,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 769,
				settings: {
					variableWidth: true
				}
			},
		]
	};

	const slider_three = {
		...slider_general,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 993,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 769,
				settings: {
					variableWidth: true
				}
			},
		]
	};

	const slider_more = {
		...slider_general,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 993,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 769,
				settings: {
					variableWidth: true
				}
			},
		]
	};

	Array.from(
		document.querySelectorAll(".view-slider-internal-event .views-row")
	).map(e => {
		if (e != null) {
			var mode_slider = e.querySelector(".item-list ul");
			switch (e.className) {
				case "views-row slider-one":
					$(mode_slider).slick(slider_one);
					break;
				case "views-row slider-two":
					$(mode_slider).slick(slider_two);
					break;
				case "views-row slider-three":
					$(mode_slider).slick(slider_three);
					break;
				case "views-row slider-more":
					$(mode_slider).slick(slider_more);
					break;
			}
		}
	});
};

export default initSlick;

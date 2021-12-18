const initMain = ($, Drupal) => {

	// js requeridos en register
	var city_input = document.querySelector('.webform-submission-register-form #edit-address-city');
	var city_label = document.querySelector('.webform-submission-register-form label[for="edit-address-city"]');
	var state_select = document.querySelector('.webform-submission-register-form #edit-address-state-province');
	var state_label = document.querySelector('.webform-submission-register-form label[for="edit-address-state-province"]');

	if (!!city_input && !!city_label && !!state_select && !!state_label) {
		city_input.setAttribute("required", "required");
		city_label.setAttribute("class", "form-required");
		state_select.setAttribute("required", "required");
		state_label.setAttribute("class", "form-required");
	}

	/// js scroll newsletter
	var container = document.querySelector('body');
	var elemento = document.getElementById('block-webform-2');

	container.onscroll = function () {
		var heightBody = container.scrollHeight - 499;
		var scroll = window.scrollY + window.innerHeight;

		/* if(scroll >= heightBody) {
			elemento.classList.add('fix');
		} else { 
			if(elemento.classList.contains('fix')) {
				elemento.classList.remove('fix');
			}
		} */
	}

	/// close 
	if (!!document.querySelector('.newsletter .close-modal')) {
		const newsletter = document.querySelector('.newsletter');
		const closeNewsletter = document.querySelector('.newsletter .close-modal');
		closeNewsletter.addEventListener('click', () => {
			newsletter.classList.add('dis-none')
		}, {
			once: true
		})
	}

	///// js para caption en imagenes news
	if (
		!!document.querySelector(
			".page-node-type-news .block-field-blocknodenewsbody img"
		)
	) {
		const images = document.querySelectorAll(
			".page-node-type-news .block-field-blocknodenewsbody img"
		);

		images.forEach(img => {
			const caption = img.dataset.caption;

			if (typeof caption === 'undefined') return;


			img.insertAdjacentHTML(
				"afterend",
				`<p class="image-caption">${caption}</p>`
			);
		});
	}

	// blockquote para selection-sharer
	const allBlockquote = document.querySelectorAll(
		'blockquote:not([class*="twitter"])'
	);

	if (!!allBlockquote && allBlockquote.length) {
		allBlockquote.forEach(blockquote => {
			if (blockquote.firstElementChild.tagName === "P") {
				let text = blockquote.firstElementChild.textContent;
				blockquote.textContent = text;
			}
		});
	}

	//text summary para selection-sharer
	let containerSummary = document.querySelector(
		".content-news-internal-first .views-element-container"
	);

	if (!!containerSummary) {
		let summary = containerSummary.querySelector(".summary-news");
		containerSummary.insertAdjacentElement("beforebegin", summary);
	}

	// js video en interna
	var video_interna = document.querySelector(
		".block-field-blocknodenewsfield-video"
	);
	var contenido_interna = document.querySelector(
		".content-news-internal-first"
	);
	if (video_interna != null && contenido_interna != null) {
		contenido_interna.classList.add("video-present");
	}

	//add dots date events time
	if (!!document.querySelector(".card-event-date-hour")) {
		const allEventsTime = document.querySelectorAll(".card-event-date-hour");

		allEventsTime.forEach(eventTime => {
			const txt = eventTime.innerText;
			eventTime.innerText = `${txt.substring(0, 7)}.${txt.charAt(7)}.`;
		});
	}

	//add dots date comments
	if (!!document.querySelector(".comment--type-comments-content")) {
		const commentsDate = document.querySelectorAll(".comment--type-comments-content .field--name-comment-post-date");

		commentsDate.forEach(date => {
			const dateTxt = date.innerText;
			date.innerText = `${dateTxt.substring(0, (dateTxt.length - 3))} ${dateTxt.charAt(dateTxt.length - 2)}.${dateTxt.charAt(dateTxt.length - 1)}`;
		});
	}

	//// js ajuste ancla en employed
	Array.from(
		document.querySelectorAll(".menu--i-am-an-employer-menu li a")
	).map(function (e) {
		e.addEventListener("click", () => {
			setTimeout(() => {
				var scroll_y = window.scrollY;
				window.scrollTo(0, scroll_y - 173);
			}, 20);
		});
	});

	//// js validador de publicidad en landing jobs
	var block_ads = document.querySelector(
		".block-block-groupgroup-career-news-jobs .block-fixed-block-contentbig-vertical-advertising iframe"
	);
	var view_career = document.querySelector(
		".block-views-blockcareer-news-block-1"
	);
	if (block_ads === null && view_career != null) {
		view_career.classList.add("view-complete");
	}

	/// js boton back
	Array.from(document.querySelectorAll(".button-back")).map(function (e) {
		if (e != null) {
			e.addEventListener("click", () => {
				e.click();
				window.history.back();
			});
		}
	});

	/// js login and register
	Array.from(document.querySelectorAll(".comment-forbidden a")).map(function (
		e
	) {
		if (e != null) {
			e.removeAttribute("href");
		}
	});
	Array.from(
		document.querySelectorAll(".comment-forbidden a:nth-child(1)")
	).map(function (e) {
		if (e != null) {
			var button_login = document.querySelector(
				'.Login-Register-popup-link.Login-Register-popup-link a[href*="login"]'
			);
			e.addEventListener("click", () => {
				button_login.click();
			});
		}
	});
	Array.from(
		document.querySelectorAll(".comment-forbidden a:nth-child(2)")
	).map(function (e) {
		if (e != null) {
			var button_regis = document.querySelector(
				'.Login-Register-popup-link.Login-Register-popup-link a[href*="register"]'
			);
			e.addEventListener("click", () => {
				button_regis.click();
			});
		}
	});

	//// js modal landing videos
	if (!!document.querySelector(".path-videos")) {

		const resetIframe = (element) => {
			if (!!element) {
				let iframe = element.querySelector('iframe');

				if (iframe.src.indexOf('?') > 0) {
					const srcEdit = iframe.src.split('?');
					iframe.src = `${srcEdit[0]}?start=0&rel=0`;
				} else {
					iframe.src = iframe.src;
				}

				iframe.classList.add("change-src");
				setTimeout(() => iframe.classList.remove("change-src"), 800);
			}
		};

		document.body.addEventListener("click", event => {
			if (event.target.classList.contains('card-one-column')) {
				let container = event.target.parentNode;
				let currentElement = event.target;
				let node = container.firstElementChild;

				while (node) {
					if (node.classList.contains('.banner-scroll')) continue;
					if (event.target.closest(".modal-video")) return;

					if (
						node != currentElement &&
						node.nodeType === Node.ELEMENT_NODE
					) {
						resetIframe(node);
						if (node.querySelector(".modal-video")) node.querySelector(".modal-video").classList.remove("show");
					} else {
						resetIframe(node);
						node.querySelector(".modal-video").classList.toggle("show");
					}

					node = node.nextElementSibling;
				}
			}

			const contentActive = event.target.closest(".card-one-column") || false;

			if (!contentActive && !!document.querySelector(".modal-video.show")) {
				let currentVideo = document.querySelector(".modal-video.show");
				let parentVideo = currentVideo.closest('.card-one-column') || false;
				document.querySelector(".modal-video.show").classList.remove("show");
				resetIframe(parentVideo);
			}

			if (event.target.classList.contains("close-video")) {
				let currentVideo = document.querySelector(".modal-video.show");
				let parentVideo = currentVideo.closest('.card-one-column') || false;
				currentVideo.classList.remove("show");
				resetIframe(parentVideo);
			}
		});
	}

	//// js para slider de video en landing de video
	const itemsCarousel = document.querySelectorAll('.block-views-blockcarousel-videos-landing-block-2 .views-row');
	const itemsNews = document.querySelectorAll('.view-id-carousel_videos_landing.view-display-id-page_1 .views-row');
	const allIframes = document.querySelectorAll(".view-id-carousel_videos_landing.view-display-id-page_1  iframe");

	const resetAlliframes = (iframes) => {
		iframes.forEach(iframe => {
			iframe.classList.add("change-src");

			if (iframe.src.indexOf('?') > 0) {
				const srcEdit = iframe.src.split('?');
				iframe.src = `${srcEdit[0]}?start=0&rel=0`;
			} else {
				iframe.src = iframe.src;
			}

			iframe.src = iframe.src;
			setTimeout(() => iframe.classList.remove("change-src"), 800);
		});
	};

	const removeActiveElements = () => {
		const list = document.querySelectorAll('.block-views-blockcarousel-videos-landing-block-2 .views-row');

		list.forEach(item => {
			if (item.classList.contains('active')) item.classList.remove('active');
		})
	}

	const toggleVideo = (nid, list) => {
		list.forEach(item => {
			let videoNid = item.dataset.nid;
			if (nid != videoNid) item.classList.remove('active');
			if (nid == videoNid) item.classList.add('active');
		})
	}

	if (document.body.classList.contains('path-videos')) {
		document.body.addEventListener('click', (event) => {
			const target = event.target;
			if (target.classList.contains('slick-slide')) {
				const nid = target.dataset.nid;
				const hasActive = target.parentElement.querySelector('.active');
				const activeNid = !!hasActive ? hasActive.dataset.nid : false;

				if (nid === activeNid) return;

				resetAlliframes(allIframes);
				removeActiveElements();

				target.classList.add('active');
				toggleVideo(nid, itemsNews);
			}
		})
	}

	// itemsCarousel.forEach(item => {
	//   item.addEventListener('click', () => {
	//     let nid = item.dataset.nid;
	//     let hasActive = item.parentElement.querySelector('.active');
	//     let activeNid = !!hasActive ? hasActive.dataset.nid : false;

	//     if (nid === activeNid) return;

	//     resetAlliframes(allIframes);
	//     removeActiveElements();

	//     item.classList.add('active');
	//     toggleVideo(nid, itemsNews);
	//   })
	// })

	//// js para controlar pop-up advertising
	if (!!document.querySelector(".path-advertising")) {
		const allButtonsApply = document.querySelectorAll(".button-apply");
		const allButtonsClose = document.querySelectorAll(".close-modal");

		const showModal = event => {
			const parent = event.path.find(elementPath =>
				elementPath.classList.contains("advertising-card")
			);
			const form = parent.querySelector(".modal-form");
			form.classList.add("show");
		};

		const hideModal = event => {
			const form = event.path.find(elementPath =>
				elementPath.classList.contains("modal-form")
			);
			form.classList.remove("show");
		};

		allButtonsApply.forEach(buttonApply =>
			buttonApply.addEventListener("click", showModal)
		);
		allButtonsClose.forEach(buttonClose =>
			buttonClose.addEventListener("click", hideModal)
		);
	}

	if (!!document.querySelector(".path-about-al-dia-live")) {
		//// js pop-up about al dia live
		const buttonApply = document.querySelector(
			".path-about-al-dia-live .button-apply"
		);
		const buttonClose = document.querySelector(".webform-about-al-dia-live .close-modal");
		const modalForm = document.querySelector(".modal-form");

		if (!!document.body.contains(buttonApply)) {
			buttonApply.addEventListener("click", () =>
				modalForm.classList.add("show")
			);
			buttonClose.addEventListener("click", () =>
				modalForm.classList.remove("show")
			);

			//// js pop-up about al dia live
			const triggerVideo = document.querySelector(
				".block-views-blockabout-al-dia-live-block-1 .about-al-dia-live-container-video"
			);
			const buttonCloseVideo = document.querySelector(".close-video");
			const video = document.querySelector(".modal-video");
			const iframe = document.querySelector('.about-al-dia-live-container-video iframe');

			//reset src iframe
			if (iframe.src.indexOf('?') > 0) {
				const srcEdit = iframe.src.split('?');
				iframe.src = `${srcEdit[0]}?start=0&rel=0`;
			}

			triggerVideo.addEventListener("click", () => {
				video.classList.add("show");
			});

			buttonCloseVideo.addEventListener("click", event => {
				event.stopPropagation();
				video.classList.remove("show");
				iframe.src = iframe.src;
			});
		}
	}

	//// js desplegable buscador y close modal
	var arrow = document.querySelector(".path-search-results .arrow");
	var blocks_search = document.querySelector(
		"#block-exposedformsearch-results-al-dia-solrpage-1"
	);
	if (arrow != null && blocks_search != null) {
		arrow.addEventListener("click", () => {
			blocks_search.classList.toggle("open");
			arrow.classList.toggle("rote");
		});
	}

	var close = document.querySelector(
		'#block-exposedformsearch-results-al-dia-solrpage-1-2  button[name="close"]'
	);

	if (!!close) {
		close.addEventListener("click", () => {
			if (close != null && close.parentElement.classList.contains("open")) {
				close.parentElement.classList.remove("open");
			}
		});
	}

	// js bloque login en comentarios
	var comments = document.querySelector(
		".block-field-blocknodenewsfield-comments .comment"
	);
	var block_login_c = document.querySelector("#block-blockcommentanonymous");
	if (comments != null && block_login_c != null) {
		block_login_c.style.display = "none";
	}

	// bloque vacio en home
	var width_b = window.innerWidth;
	if (width_b <= 768) {
		Array.from(document.querySelectorAll(".view-more-category")).map(function (
			e
		) {
			if (e !== null && e.children.length === 2) {
				/* e.closest(".views-field.views-field-view-2").style.display = "none";
				e.closest(".mobile-free").style.border = "0px"; */
			}
		});
	}

	///// js para select de categorias, subcategorias y subsubcategorias
	Array.from(
		document.querySelectorAll(
			"#views-exposed-form-search-results-al-dia-solr-page-1 .form-item-field-category li label"
		)
	).map(function (e) {
		if (e != null && !e.innerHTML.includes("-")) {
			e.classList.add("category");
		}
	});

	//// publicidad horizontal cada 6 en more covers
	Array.from(
		document.querySelectorAll(
			".block-fixed-block-contenthorizontal-advertising"
		)
	).map(function (e) {
		if (e != null) {
			Array.from(
				document.querySelectorAll(
					".view-more-covers-landing  .view-content .views-row:nth-child(7n)"
				)
			).map(function (evt) {
				if (
					evt != null &&
					!evt.nextElementSibling.classList.contains(
						"block-fixed-block-contenthorizontal-advertising"
					)
				) {
					evt.parentElement.insertBefore(e, evt);
				}
			});
		}
	});

	///// js indentificar de primer modo de vista en guest event
	var adversiting = document.querySelector(
		".three-content-event-advertising iframe"
	);
	var first_element = document.querySelector(
		".view-block-guest  .views-row:nth-child(1) .views-field-field-style > div"
	);
	if (adversiting != null && first_element != null) {
		if (first_element.innerText == "one") {
			if (!!adversiting.parentElement.parentElement) adversiting.parentElement.parentElement.classList.add("maxim");
		} else {
			adversiting.classList.add("dis-none");
		}

	}

	//js para eliminar publicidad two column events
	setTimeout(() => {
		var adversiting_two_col = document.querySelector(
			".view-id-block_guest .ads-two-col .block-gamw"
		);
		var position_two_col = document.querySelector(
			".view-id-block_guest .mode-two"
		);
		if (!!adversiting_two_col && !!position_two_col) {
			position_two_col.appendChild(adversiting_two_col);
			adversiting_two_col.classList.add("four-content-event-advertising", "ads");
		}
	}, 2500);

	//js para comment anonymous
	if (!!document.querySelector('.block-comments-anonymous')) {
		const blockAnonymus = document.querySelector('.block-comments-anonymous');
		const allTextMessage = blockAnonymus.querySelectorAll('.text-anonymous-comment');
		const login = blockAnonymus.querySelector('.login-anonymous-comment');
		const register = blockAnonymus.querySelector('.register-anonymous-comment');

		const container = document.createElement('div');
		const message = document.createElement('div');

		container.classList.add('message-comments-container');
		message.classList.add('message-comments-links');

		message.appendChild(login);
		message.appendChild(allTextMessage[1])
		message.appendChild(register);
		message.appendChild(allTextMessage[2])

		container.appendChild(allTextMessage[0]);
		container.appendChild(message);

		blockAnonymus.querySelector('.content').insertAdjacentElement('afterend', container);

		blockAnonymus.addEventListener('click', function () {
			blockAnonymus.classList.add('show');
		}, {
			once: true
		});
	}

	//--------puopup-- login-----------//
	/* $(".user-logged-in #block-menuuseritem").click(function() {
		if ($(this).hasClass("open")) {
			$(this).removeClass("open");
			$(".user-logged-in #block-menuuseritem .item-list").removeClass("open");
		} else {
			$(".user-logged-in #block-menuuseritem .item-list").addClass("open");
			$(this).addClass("open");
		}
	}); */

	/* var icon_menu = document.querySelector(".user-logged-in #block-menuuseritem");
	var list_menu = document.querySelector(".user-logged-in #block-menuuseritem .item-list");

	if(!!icon_menu && !!list_menu){
	icon_menu.addEventListener('click', () => {
		if(icon_menu.classList.contains("open")){
			icon_menu.classList.remove("open");
			list_menu.classList.remove("open");
		} else{
			list_menu.classList.add("open");
			icon_menu.classList.add("open");
		}
		})
	} */

	if (!!document.querySelector(".user-logged-in #block-menuuseritem")) {
		document.querySelector(".user-logged-in #block-menuuseritem").addEventListener('click', function () {
			if (this.classList.contains('open')) {
				this.classList.remove('open');
				document.querySelector('.user-logged-in #block-menuuseritem .item-list').classList.remove('open');
			} else {
				document.querySelector('.user-logged-in #block-menuuseritem .item-list').classList.add('open');
				this.classList.add('open');
			}
		})
	}

	///// js para modos de visualizacion de slider event
	Array.from(
		document.querySelectorAll(
			".view-slider-internal-event .views-field-field-slider-styl div"
		)
	).map(e => {
		if (e != null) {
			if (e.innerText.trim() == "sone") {
				e.closest(".views-row").classList.add("slider-one");
			} else if (e.innerText.trim() == "stwo") {
				e.closest(".views-row").classList.add("slider-two");
			} else if (e.innerText.trim() == "sthree") {
				e.closest(".views-row").classList.add("slider-three");
			} else if (e.innerText.trim() == "smor") {
				e.closest(".views-row").classList.add("slider-more");
			}
		}
	});


	////// js para añadir el boton de respuesta en la lista
	Array.from(
		document.querySelectorAll(".al-dia-news-reply-comments input[value=REPLY]")
	).map(function (e) {
		var father_li = e.closest("ul").querySelector(".container-reply");
		if (!!e && !!father_li) {
			father_li.appendChild(e);
		}
	});
	Array.from(
		document.querySelectorAll(".al-dia-news-reply-comments input[value=RESPONDER]")
	).map(function (e) {
		var father_li = e.closest("ul").querySelector(".container-reply");
		if (!!e && !!father_li) {
			father_li.appendChild(e);
		}
	});


	/////// js para añadir la cantidad de comentarios de respuesta 
	Array.from(document.querySelectorAll("section .comment")).map(function (e) {
		if (!e.nextElementSibling) return;
		if (!!e.nextElementSibling.classList.contains("indented")) {
			var count_children = [...e.nextElementSibling.children].filter(ev => {
				if (ev.classList.contains("comment")) {
					return ev;
				}
			});
			e.querySelector(".container-show-hide .num").innerHTML =
				count_children.length;
		} else {
			e.classList.add("no-answer");
		}
	});

	/////// js para añadir la cantidad de comentarios de desplegable
	Array.from(document.querySelectorAll("section .comment")).map(function (e) {
		if (!e.nextElementSibling) return;
		if (!!e.nextElementSibling.classList.contains("indented")) {
			e.querySelector(".container-show-hide").addEventListener("click", () => {
				e.querySelector(".container-show-hide").classList.toggle("active");
				e.nextElementSibling.classList.toggle("dis-block");
			});
		}
	});

	/// js para dropdown podcast
	if (!!document.querySelector('.path-podcast') || !!document.querySelector('.path-taxonomy')) {
		const containerContainer = document.querySelector('.category-list');
		const buttonCategories = document.querySelector('.category-button-mobile');

		if (!!containerContainer) {
			buttonCategories.addEventListener('click', () => {
				containerContainer.classList.toggle('open');
				buttonCategories.classList.toggle('up');
			})
		}
	}

	// validador watchlive
	var watch_live_iframe = document.querySelector(".watch-live-video iframe");
	var watch_live_content = document.querySelector(".watch-live");
	if (watch_live_iframe == null && !!watch_live_content) {
		watch_live_content.classList.add("watch-dis-none");
	}

	// js para pagina premium, boton e video y comentarios
	var premium = document.querySelector(".node--view-mode-premium");
	if (!!premium) {
		premium.closest("body").classList.add("page-premium");
	}

	var video_premium = document.querySelector(".block-field-blocknodenewsfield-video.premium .close-modal");
	var content_premium = document.querySelector(".block-field-blocknodenewsfield-video.premium .content");
	if (!!video_premium && !!content_premium) {
		content_premium.prepend(video_premium);
	}

	// Js password strength color

	var inputPassword = document.querySelector(".form-item-pass-pass1 input");

	if (inputPassword) {
		inputPassword.addEventListener("keyup", function () {
			var LineKeyStrength = document.querySelector(
				".password-strength__indicator"
			);
			var TextKeyStrength = document.querySelector(".password-strength__text");

			var colorLineKeyStrength = window
				.getComputedStyle(LineKeyStrength)
				.getPropertyValue("background-color");
			TextKeyStrength.style.color = colorLineKeyStrength;
		});
	}

	//// js para sponsorchip budget
	var budget = document.querySelector(".webform-submission-sponsorship-upcoming-event-form .form-item-budget");
	var container_country = document.querySelector(".webform-submission-sponsorship-upcoming-event-form #edit-address--2--wrapper .fieldset-wrapper");

	if (!!budget && !!container_country) {
		container_country.appendChild(budget);
	}

	//// js fondo modal 
	var modal_welcome = document.querySelector(".pop-up-wellcome-aldia");
	var background_body = document.querySelector("body");

	if (!!modal_welcome && !!background_body) {
		let btn = modal_welcome.querySelector('.aldia-home-close');
		let btnPreload = modal_welcome.querySelector('.button-preload');

		if (!!btn) btn.addEventListener('click', () => location.reload());
		if (!!btnPreload) btnPreload.addEventListener('click', () => location.reload());

		background_body.classList.add("background-modal");
	}

	// traducion filtro videos
	var filterVideos = document.querySelector('#views-exposed-form-more-videos-in-landing-block-1');

	if (!!filterVideos) {
		var lang = document.documentElement.lang;
		var labelAny = filterVideos.querySelector('#edit-tid-all + label');

		if (lang == 'es') {
			labelAny.textContent = 'Cualquiera';
		}

	}

	const menuFooterSecondColumn = document.querySelector("#block-footer > div.content > ul > li:nth-child(2) > div > ul")

	if (!!menuFooterSecondColumn) {
		let copyr = document.querySelector('.copyr').cloneNode(true);
		let powerd = document.querySelector('.powerd').cloneNode(true);

		menuFooterSecondColumn.append(copyr, powerd);

	}

	const landingVideos = document.querySelector(".path-videos");

	if (!!landingVideos) {
		const lang = document.documentElement.lang;
		const radioAllItem = document.querySelector('#edit-tid-all + label');

		if (lang == 'es') {
			radioAllItem.textContent = 'TODOS';
		}

	}

	const url = window.location.href;
	let newUrl;

	if(url.indexOf('?') > 0 ){
		newUrl = `${url}&device=mobile`;
	}	
	else if (url.charAt(url.length - 1) == '/') {
		newUrl = url.replace(/\/$/, '?');
		newUrl += 'device=mobile';
	} else {
		newUrl = `${url}?device=mobile`;
	}

	const initialWidth = window.innerWidth;
	const tablet = 1024;
	const mobile = 768;

	let device = 'desktop';

	if (initialWidth <= tablet) {
		device = 'tablet';
	}

	if (initialWidth <= mobile) {
		device = 'mobile';
	}

	window.addEventListener('resize', function () {
		const currentWidth = window.innerWidth;
		checkReloadPage(device, currentWidth);
	})

	function checkReloadPage(device, currentWidth) {
		if (device === 'desktop') {
			if (currentWidth < tablet) window.location.replace(newUrl);
		}

		if (device === 'tablet') {
			if (currentWidth > tablet) location.reload();
			if (currentWidth < mobile) window.location.replace(newUrl);
		}

		if (device === 'mobile') {
			if (currentWidth > mobile) window.location.replace(newUrl);
		}
	}

};

export default initMain;

document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar')
	const allNavItems = document.querySelectorAll('.nav-link')
	const navList = document.querySelector('.navbar-collapse')
	const allBody = document.body
	const order = document.querySelectorAll('.order')

	function addShadow() {
		if (window.scrollY >= 100)  {
			nav.classList.add('shadow-bg')
		} else {
			nav.classList.remove('shadow-bg')
		}
	}
	

	allNavItems.forEach(item =>
		item.addEventListener('click', () => {
			navList.classList.remove('show')
		})
	)

	const clickbody = () => {
		navList.classList.remove('show')
	}

	allBody.addEventListener('click', clickbody)
	window.addEventListener('scroll', addShadow)
	
// change the position on the page of the photos of the offers when they are one below the other

	window.addEventListener('resize', function() {
		const orderElements = document.querySelectorAll('.order');
		const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		
		orderElements.forEach(function(element) {
		  if (width < 992) {
			element.classList.add('order-1');
		  } else {
			element.classList.remove('order-1');
		  }
		});
	  });
	
	  // Wywołaj funkcję przy załadowaniu strony
	  window.dispatchEvent(new Event('resize'));
})

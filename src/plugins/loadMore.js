export default {
	install(Vue, options) {
		console.log(options);
		Vue.directive('scrollToTop', {
			bind(el, binding) {
				console.log(binding);
				el.addEventListener('click', () => {
					window.scrollTo({
						top: 0,
						left: 0,
						behavior: 'smooth'
					})
				})
			}
		})

		Vue.directive('loadMore', {
			bind(el, binding) {
				console.log(el);
				window.addEventListener('scroll', () => {
					var scrollHeight = document.documentElement.scrollHeight;
					var clientHeight = document.documentElement.clientHeight;
					var scrollMax = scrollHeight - clientHeight;
					var scrollTop = document.documentElement.scrollTop;
					if (scrollTop + 50 > scrollMax) {
						if(typeof binding.value == 'function'){
							binding.value()
						}else{
							console.error('v-loadMore指令的取值必须是一个函数!')
						}
					}
				})
			}
		})
	},

}

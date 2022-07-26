const app = Vue.createApp({
	//template: '<h2> my temp </h2>'
	data(){
		return {
			my_var: 'The Final Empire',
			another_var: 'BOI',
			my_number: 68,
			shouldShow: true
		}
	},
	methods: {
		changeTitle(newTitle){
			this.my_var = newTitle
		}
	}
})

app.mount('#app')
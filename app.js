const app = Vue.createApp({
	//template: '<h2> my temp </h2>'
	data(){
		return {
			my_var: 'The Final Empire',
			another_var: 'BOI',
			my_number: 68
		}
	},
	methods: {
		changeTitle(){
			this.my_var = 'The Final Empire'
		}
	}
})

app.mount('#app')
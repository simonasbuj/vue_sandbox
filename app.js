const app = Vue.createApp({
	//template: '<h2> my temp </h2>'
	data(){
		return {
			my_var: 'The Final Empire',
			another_var: 'BOI',
			my_number: 68,
			shouldShow: true,
			shouldShowText: "Hide",
			positionLeft: 100,
			psoitionTop: 20,
			movies: [
				{title: "The Sea Beast", length: "1 hour 43 mins"},
				{title: "Prehistoric Episode 4", length: "45 mins"},
				{title: "Mandalorian Season 1", length: "6 hours 17 mins"}
			]
		}
	},
	methods: {
		changeTitle(newTitle) {
			this.my_var = newTitle
		},
		showOrHide() {
			this.shouldShow = !this.shouldShow
			this.shouldShow == true ? this.shouldShowText = "Hide" : this.shouldShowText = "Show"
		},
		handleMousemove(e) {
			console.log("mouse coordinates in body: " + e.offsetX + " " + e.offsetY + " " + this.positionLeft);
			this.positionLeft = e.clientX
			this.psoitionTop = e.clientY
			console.log(e)
		}
	},
	mounted() {
		//document.addEventListener('mousemove', this.handleMousemove)
	}
})

app.mount('#app')
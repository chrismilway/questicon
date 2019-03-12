<template>
	<button type="button" class="app-die" @click="onClick">{{label}}</button>
</template>

<script>
export default {
	name: 'app-die',
	props: {
		value: Number,
		scheme: {
			type: String,
			default: 'light',
		},
	},
	data() {
		return {
			label: null,
		}
	},
	methods: {
		onClick() {
			if (!this.value) {
				const v = Math.ceil(Math.random() * 6);
				this.$emit('cast', v);
				this.label = v;
			}
		}
	},
	mounted() {
		this.label = this.value || '?';
	}
}
</script>

<style>

</style>

<template>
  <button
		@click="clicked" 
		class="w-full h-[40px] text-white bg-purple-900 hover:bg-purple-950 active:bg-purple-900 rounded-md">
		{{ prop.label }}
	</button>
</template>

<script lang="ts" setup>

const prop = defineProps({
	label: {
		type: String,
		required: true
	}
})

const emit = defineEmits(['onClick'])

function clicked() {
	emit('onClick', true)
}

</script>

<style>

</style>
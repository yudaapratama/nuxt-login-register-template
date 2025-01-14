<template>
	<div class="flex items-center  select-none" @click="onChange">
		<input type="checkbox" class="hidden" :checked="props.value">
		<span :class="`w-5 h-5 ${props.value ? 'bg-purple-950' : 'bg-transparent border-gray-300'} border rounded-md items-center justify-center flex cursor-pointer`">
			<Check class="text-white" :size="16" v-if="props.value" />
		</span>
		<label class="ml-2 block text-sm text-gray-950 cursor-pointer"> {{ props.label }} </label>
	</div>
</template>

<script lang="ts" setup>
	import { Check } from 'lucide-vue-next'

	const props = defineProps({
		label: {
			type: String,
			required: true
		},
		value: {
			type: Boolean,
			default: false
		}
	})

	const emit = defineEmits(['onChange'])

	const onChange = () => {
		emit('onChange', props.value)
	}
</script>
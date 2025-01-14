<template>
  <div class="flex flex-col gap-2">
		<label class="">{{ props.label }}</label>
		<input v-if="props.type !== 'password'" type="text" v-model="value" class="text-sm appearance-none bg-transparent p-2 h-[40px] border rounded-md placeholder:text-[#bababa] focus:border-purple-950 focus:outline-1 border-gray-400 w-full leading-tight" :placeholder="props.placeholder" autocomplete="off">

		<div class="relative w-full" v-if="props.type === 'password'">
			<div class="absolute inset-y-0 right-0 flex items-center px-2 cursor-pointer" @click="onShowPassword">
				<Icon name="lucide:eye-closed" v-if="!showPassword" class="w-4 h-4"/>
				<Icon name="lucide:eye" v-else class="w-4 h-4"/>
			</div>
			<input :type="showPassword ? 'text' : 'password'" v-model="value" class="text-sm appearance-none bg-transparent p-2 h-[40px] border rounded-md placeholder:text-[#bababa] focus:border-purple-950 focus:outline-1 border-gray-400 w-full leading-tight" :placeholder="props.placeholder" autocomplete="off">
		</div>

	</div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue';

type InputType = 'text' | 'password'
const props = defineProps({
	label: {
		type: String,
		required: true
	},
	placeholder: {
		type: String,
	},
	type: {
		type: String as PropType<InputType>,
		default: 'text'
	},
})

const value = defineModel()
const showPassword = ref(false)

const onShowPassword = () => {
	showPassword.value = !showPassword.value
}
</script>
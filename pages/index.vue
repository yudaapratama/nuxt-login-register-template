<template>
	<div class="m-auto w-6/12">
		<div class="space-y-3.5 items-center">
			<div class="flex flex-col items-center space-y-2">
				<NuxtImg src="/images/lab.svg" alt="picture_logo" class="h-14 w-14" />
				
				<h2 class="text-2xl font-bold ">Welcome Back to Labs</h2>
				<p class="text-gray-700 text-center">Please enter your username and password to continue</p>
				
			</div>
			
			<div class="grid grid-rows-3 gap-4 w-full items-center">
				<LInput label="Username" placeholder="Enter your username" />
				
				<LInput label="Password" placeholder="Enter your password" type="password" />

				<div class="flex flex-col gap-4">
					<div class="flex items-center justify-between">
						<LCheckbox label="Remember me" :value="form.remember" @on-change="onChange" />
						<NuxtLink to="/forgot-password" class="text-sm hover:underline">Forgot Password?</NuxtLink>
					</div>
					<LButton label="Sign In"></LButton>
				</div>
			</div>
			
			<div class="relative flex items-center ">
				<div class="flex-grow border-t border-gray-400"></div>
				<span class="flex-shrink mx-4 text-sm text-gray-400">Or login with</span>
				<div class="flex-grow border-t border-gray-400"></div>
			</div>

			<div class="flex gap-4 justify-between ">
				<button class="flex items-center justify-center w-full h-[40px] text-gray-950 bg-white hover:bg-gray-50 active:bg-gray-100 rounded-md border border-gray-300">
					<NuxtImg src="/images/google.svg" alt="picture" class="w-5 h-5 mr-2" />
					Google
				</button>
				<button class="flex items-center justify-center w-full h-[40px] text-gray-950 bg-white hover:bg-gray-50 active:bg-gray-100 rounded-md border border-gray-300">
					<NuxtImg src="/images/apple.svg" alt="picture" class="w-5 h-5 mr-2" />
					Apple
				</button>
			</div>

			<div class="flex justify-center mt-4">
				<span class="text-sm text-gray-400">Don't have an account?&nbsp;</span> <NuxtLink to="/register" class="text-sm hover:underline">Sign Up</NuxtLink>
			</div>
		</div>
		
	</div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import LInput from '~/components/LInput.vue';
import LCheckbox from '~/components/LCheckbox.vue';
import LButton from '~/components/LButton.vue';

const title = 'Sign In'
const description = 'Sign in to your account'

definePageMeta({
	layout: 'labs-layout'
})

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})

const form = reactive({
	remember: false
})

const onChange = (event: any) => {
	form.remember = !event
}

</script>
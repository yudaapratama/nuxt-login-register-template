<template>
	<div class="m-auto w-6/12">
		<div class="space-y-3.5  ">
			<div class="flex flex-col items-center space-y-2">
				<NuxtImg src="/images/lab.svg" alt="picture_logo" class="h-14 w-14" />
				
				<h2 class="text-2xl font-bold text-center">Create Your Labs Account</h2>
				<p class="text-gray-700 text-center ">Sign up to access all the features</p>
				
			</div>
			
			<div class="grid grid-rows-3 gap-4 w-full items-center">
				<LInput label="Name" placeholder="Enter your name" />
				<LInput label="Username" placeholder="Enter your username" />
				<LInput label="Password" type="password" placeholder="Enter your password" />
				<LInput label="Confirm Password" type="password" placeholder="Enter your password" />
				
				<div class="flex flex-col gap-4">
					<LButton label="Sign Up"></LButton>
				</div>
			</div>
			
			<div class="relative flex items-center ">
				<div class="flex-grow border-t border-gray-400"></div>
				<span class="flex-shrink mx-4 text-sm text-gray-400">Or Sign Up with</span>
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
				<span class="text-sm text-gray-400">Already have an account?&nbsp;</span> <NuxtLink to="/" class="text-sm hover:underline">Sign In</NuxtLink>
			</div>
		</div>
		
	</div>
</template>

<script lang="ts" setup>
import LInput from '~/components/LInput.vue';

const title = 'Sign Up'
const description = 'Sign up to access all the features'

definePageMeta({
	layout: 'labs-layout'
})

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})
</script>
<template>
  <div class="m-auto w-6/12">
		<div class="space-y-3.5 ">
			<div class="flex flex-col space-y-2">
				<h2 class="text-2xl font-bold text-center">Forgot Password</h2>
				<p class="text-gray-700 text-center">No worries! Enter your email address and we'll send you a link to reset your password</p>
				
			</div>

			<div class="grid grid-rows-2 w-full items-center">
				<LInput label="Email" placeholder="Enter your email address" />

				<LButton label="Submit" @on-click="onClick"></LButton>
				<NuxtLink to="/" class="flex items-center justify-center w-full h-[40px] bg-gray-200 hover:bg-gray-300 active:bg-gray-200 rounded-md">
					Cancel
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>

	const title = 'Forgot Password'
	const description = 'No worries! Enter your email address and we\'ll send you a link to reset your password'

	definePageMeta({
		layout: 'labs-layout'
	})

	useSeoMeta({
		title,
		ogTitle: title,
		description,
		ogDescription: description
	})

	const router = useRouter()

	function onClick(): void {
		router.push('/check-email')
	}
</script>
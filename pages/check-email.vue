<template>
  <div class="m-auto w-6/12">
		<div class="space-y-8 ">
			<div class="flex flex-col items-center space-y-2">
				<NuxtImg src="/images/duotone-send.svg" alt="picture_email" class="h-14 w-14" />

				<h2 class="text-2xl font-bold text-center">Check Your Email</h2>
				<p class="text-gray-700 text-center">We sent password reset link to your email. Please check your inbox</p>
				
			</div>

			<div class="grid grid-rows-2 w-full items-center">

				<LButton label="Open Email" @on-click="onClick"></LButton>
				<div class="flex justify-center mt-4">
					<span class="text-sm text-gray-400">Didn't receive an email?&nbsp;</span> <NuxtLink class="text-sm hover:underline">Resend</NuxtLink>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>

const title = 'Validate Email'
const description = 'We sent password reset link to your email. Please check your inbox'

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

function onClick() {
	router.push('/change-password')
}

</script>
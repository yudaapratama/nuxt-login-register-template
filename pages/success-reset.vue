<template>
  <div class="m-auto w-6/12">
		<div class="space-y-8 ">
			<div class="flex flex-col items-center space-y-2">
				<NuxtImg src="/images/duotone-like.svg" alt="picture_email" class="h-14 w-14" />

				<h2 class="text-2xl font-bold text-center">Your Password Has Been Reset</h2>
				<p class="text-gray-700 text-center">You can now login with your new password. If you have any questions, please contact our support team</p>
				
			</div>

			<div class="w-full items-center">
				<LButton label="Back to Login" @on-click="onClick"></LButton>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>

const title = 'Success Reset'
const description = 'Your password has been reset. You can now login with your new password. If you have any questions, please contact our support team'

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
	router.push('/')
}

</script>
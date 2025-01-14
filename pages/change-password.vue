<template>
	<div class="m-auto w-6/12">
		<div class="space-y-3.5 items-center">
			<div class="flex flex-col items-center space-y-2">
				
				<h2 class="text-2xl font-bold ">Create a New Password</h2>
				<p class="text-gray-700 text-center">Enter your new password below to complete the reset process. Ensure it's strong and secure</p>
				
			</div>
			
			<div class="grid grid-rows-3 gap-4 w-full items-center">
				
				<LInput label="New Password" placeholder="Enter your new password" type="password" />
				<LInput label="Confirm Password" placeholder="Enter your confirm password" type="password" />

				<div class="flex flex-col gap-4">
					<LButton label="Submit" @on-click="onClick"></LButton>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script lang="ts" setup>
import LInput from '~/components/LInput.vue';

const title = 'Change Password'
const description = 'Enter your new password below to complete the reset process. Ensure it\'s strong and secure'

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
	router.push('/success-reset')
}

</script>
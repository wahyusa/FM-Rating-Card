<script lang="ts">
	export let ratingValue = 0;
</script>

<section
	class="p-6 rounded-xl bg-brand-dark-blue max-w-[350px] mx-auto flex items-center flex-col space-y-4"
>
	<img class="my-2" src="FM-Rating-Card/images/illustration-thank-you.svg" alt="illustration-thank-you" />
	<span class="rounded-full text-brand bg-brand-medium-grey/20 px-3 py-1.5">
		You selected {ratingValue} out of 5
	</span>
	<h1 class="text-brand-white text-2xl tracking-wide font-bold">Thank You!</h1>
	<p class="text-[15px]">
		We appreciate you taking the time to give a rating. If you ever need more support, don’t
		hesitate to get in touch!
	</p>
</section>

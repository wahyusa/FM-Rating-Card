<script lang="ts">
	let isRated = false;
	let ratingValue = 0;

	const handleRating = () => {
		console.log(`Rating value`);
		isRated = true;
	};

	import ThankYou from '../components/ThankYou.svelte';
	import { fade } from 'svelte/transition';
</script>

<main
	class="h-screen bg-brand-very-dark-blue grid items-center justify-center content-around font-overpass text-brand-light-grey"
>
	{#if isRated}
		<div transition:fade={{ duration: 1000 }}>
			<ThankYou {ratingValue} />
		</div>
	{:else}
		<section
			class="p-6 rounded-xl bg-brand-dark-blue max-w-[350px] mx-auto flex flex-col space-y-4"
		>
			<div class="rounded-full bg-brand-medium-grey/20 self-start inline-block drop-shadow-lg p-3">
				<img src="FM-Rating-Card/images/icon-star.svg" alt="icon star" />
			</div>
			<h1 class="text-brand-white text-2xl tracking-wide font-bold">How did we do?</h1>
			<p class="text-[15px]">
				Please let us know how we did with your support request. All feedback is appreciated to help
				us improve our offering!
			</p>
			<div class="flex items-center space-x-5 py-3 justify-center">
				<button
					on:focus={() => {
						ratingValue = 1;
					}}
					class="focus:bg-brand-light-grey focus:text-brand-white hover:text-brand-white cursor-pointer hover:bg-brand rounded-full transition-colors duration-300 bg-brand-medium-grey/20 p-4 h-11 w-11 flex justify-center items-center"
					>1</button
				>
				<button
					on:focus={() => {
						ratingValue = 2;
					}}
					class="focus:bg-brand-light-grey focus:text-brand-white hover:text-brand-white cursor-pointer hover:bg-brand rounded-full transition-colors duration-300 bg-brand-medium-grey/20 p-4 h-11 w-11 flex justify-center items-center"
					>2</button
				>
				<button
					on:focus={() => {
						ratingValue = 3;
					}}
					class="focus:bg-brand-light-grey focus:text-brand-white hover:text-brand-white cursor-pointer hover:bg-brand rounded-full transition-colors duration-300 bg-brand-medium-grey/20 p-4 h-11 w-11 flex justify-center items-center"
					>3</button
				>
				<button
					on:focus={() => {
						ratingValue = 4;
					}}
					class="focus:bg-brand-light-grey focus:text-brand-white hover:text-brand-white cursor-pointer hover:bg-brand rounded-full transition-colors duration-300 bg-brand-medium-grey/20 p-4 h-11 w-11 flex justify-center items-center"
					>4</button
				>
				<button
					on:focus={() => {
						ratingValue = 5;
					}}
					class="focus:bg-brand-light-grey focus:text-brand-white hover:text-brand-white cursor-pointer hover:bg-brand rounded-full transition-colors duration-300 bg-brand-medium-grey/20 p-4 h-11 w-11 flex justify-center items-center"
					>5</button
				>
			</div>
			<button
				on:click={handleRating}
				class="bg-brand transition-colors duration-300 font-bold hover:bg-brand-white hover:text-brand text-brand-white p-3 text-sm tracking-widest rounded-full"
			>
				SUBMIT
			</button>
		</section>
	{/if}
</main>

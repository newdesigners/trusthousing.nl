<template>
	<main>
		<section class="bg-gray-light">
			<div class="container pt-24 w-3/4 mx-auto text-center">
				<h1 class="pb-5">Hello! Are you looking for a place to live in the Netherlands</h1>
				<p class="px-36 pb-16 gray-text">There are thousands of people being scammed each year in student housing deals. Our mission is to stop this from happening by following these steps.</p>
			</div>
			<article class="container w-7/12 mx-auto pb-48">
				<ul class="flex flex-col justify-center">
					<li class="flex mb-14">
						<div class="rounded-full w-14 h-14 bg-gray flex items-center justify-center font-suez text-28 mr-6">1</div>
						<div class="flex-1">
							<h3 class="underline">Inform yourself</h3>
							<p>The Netherlands has their own rules and listings. We help you with your first steps.</p>
						</div>
					</li>
					<li class="flex pb-14">
						<div class="rounded-full w-14 h-14 bg-gray flex items-center justify-center font-suez text-28 mr-6">2</div>
						<div class="flex-1">
							<h3 class="underline">Check if the offer is trustworthy</h3>
							<p class="gray-text pb-6">We scan the offer for red flags and give rate it with our <u>TrustMark system</u>.</p>
							<div>
								<NuxtLink class="rounded-full py-3 px-6 text-white bg-black mr-3.5" to="/start-checking/1">Start TrustMark Scan</NuxtLink>
								<a class="rounded-full py-3 px-6 text-white bg-gray-dark" href="/">Install browser plugin</a>
							</div>
						</div>
					</li>
					<li class="flex">
						<div class="rounded-full w-14 h-14 bg-gray flex items-center justify-center font-suez text-28 mr-6">3</div>
						<div class="flex-1">
							<h3 class="underline">Found a house? Go close the deal</h3>
							<p>If you the offer is deemed trustworthy in our system, you can use our platform “Close the deal” to provide a safe environment for your payment and contract details.</p>
						</div>
					</li>
				</ul>
			</article>
		</section>
	</main>
</template>

<script>
export default {};
</script>

<style>
</style>

<template>
	<main>
		<section class="bg-primary-light">
			<div class="relative container pt-24 w-3/4 mx-auto text-center">
				<svg class="absolute -left-20" width="148" height="149" viewBox="0 0 148 149" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="67" cy="67" r="67" fill="#FFC640"/><circle cx="114.5" cy="115.5" r="33.5" fill="#446085" fill-opacity=".3"/></svg>
				<h1 class="pb-5">Hello! Are you looking for a place to live in the Netherlands</h1>
				<p class="px-36 pb-16 gray-text">There are thousands of people being scammed each year in student housing deals. Our mission is to stop this from happening by following these steps.</p>
			</div>
			<article class="container w-7/12 mx-auto">
				<ul class="flex flex-col justify-center mb-5">
					<li class="flex mb-14">
						<div class="rounded-full w-14 h-14 bg-white flex items-center justify-center font-suez text-28 mr-6">1</div>
						<div class="flex-1">
							<NuxtLink to="/inform-yourself" class="font-suez text-18 underline">Inform yourself</NuxtLink>
							<p>The Netherlands has their own rules and listings. We help you with your first steps.</p>
						</div>
					</li>
					<li class="flex pb-14">
						<div class="rounded-full w-14 h-14 bg-white flex items-center justify-center font-suez text-28 mr-6">2</div>
						<div class="flex-1">
							<NuxtLink to="/start-checking/1" class="font-suez text-18 underline">Check if the offer is trustworthy</NuxtLink>
							<p class="gray-text pb-6">We scan the offer for red flags and give rate it with our <u>TrustMark system</u>.</p>
							<div>
								<NuxtLink class="rounded-full py-3 px-6 text-primary bg-yellow mr-3.5" to="/start-checking/1">Start TrustMark Scan</NuxtLink>
								<a class="rounded-full py-3 px-6 text-white bg-blue" href="/">Install browser plugin</a>
							</div>
						</div>
					</li>
					<li class="flex">
						<div class="rounded-full w-14 h-14 bg-white flex items-center justify-center font-suez text-28 mr-6">3</div>
						<div class="flex-1">
							<NuxtLink to="/" class="font-suez text-18 underline">Found a house? Go close the deal</NuxtLink>
							<p>If you the offer is deemed trustworthy in our system, you can use our platform “Close the deal” to provide a safe environment for your payment and contract details.</p>
						</div>
					</li>
				</ul>
				<figure class="flex justify-end ">
					<img class="w-1/2 h-auto" src="~/assets/images/illustrations/house.png" alt="house illustration">
				</figure>
			</article>
			<article class="bg-white py-20">
				<div class="w-10/12 mx-auto container">
					<div class="flex items-center mb-12">
						<div class="pl-20 pr-20 flex-1">
							<h2 class="text-24">What is this platform?</h2>
							<p>We would like to bring back trust in the student housing market by offering a safe way to find your home in the Netherlands. We check the trustworthiness of your listing and help you with safe identification, deposit and final transaction.</p>
						</div>
						<figure class="rounded-full w-80 h-80 bg-yellow"></figure>
					</div>
					<div class="flex items-center">
						<figure class="rounded-full w-80 h-80 bg-blue"></figure>
						<div class="pl-20 pr-20 flex-1">
							<h2 class="text-24">Who built this platform?</h2>
							<p>We would like to bring back trust in the student housing market by offering a safe way to find your home in the Netherlands. We check the trustworthiness of your listing and help you with safe identification, deposit and final transaction.</p>
						</div>
					</div>
				</div>
			</article>
			<article>
				<figure class="w-full h-108">
					<img
						class="w-full h-full object-cover"
						src="~/assets/images/home-image-min.png"
						alt="picture of The Netherlands"
					/>
				</figure>
			</article>
			<article class="bg-white py-20">
				<div class="w-10/12 mx-auto container pb-28">
					<div class="px-20">
						<h2 class="pb-0.5">Our mission</h2>
						<p class="text-24 pb-14">To bring safety to the student housing market of Netherlands. In recent years, students (both dutch and international) have been facing an uphill battle to find suitable and affordable accomodation.</p>
						<p class="text-24">More and more scammers have taken advantage of desparate students trying to seek their home in the Netherlands. Our platform tackles this issue by checking the landlord and offer information by our system called <u>TrustMark</u>.</p>
					</div>
				</div>
				<div class="w-10/12 mx-auto container pb-40">
					<div class="px-20">
						<h2 class="pb-8">Our partners</h2>
						<div class="flex">
							<figure class="pr-10">
								<img class="w-32 h-auto" src="~/assets/images/partners/hhs.png" alt="logo of THUAS" />
							</figure>
							<figure class="pr-10">
								<img class="w-32 h-auto" src="~/assets/images/partners/nd.png" alt="logo of New Designers" />
							</figure>
							<figure class="pr-10">
								<img class="w-32 h-auto" src="~/assets/images/partners/hfg.png" alt="logo of Hackathon For Good" />
							</figure>
							<figure>
								<img class="w-32 h-auto" src="~/assets/images/partners/mosaj.png" alt="logo of Minister of Security and Justice" />
							</figure>
						</div>
					</div>
				</div>
			</article>
		</section>
	</main>
</template>

<script>
export default {};
</script>

<style>
</style>

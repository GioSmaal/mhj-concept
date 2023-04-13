function NavBar() {
  return (
	<nav class="bg-white dark:bg-dark-green fixed w-full z-20 top-0 left-0 ">
		<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
			<div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
				<ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
					<li>
						<a href="#" class="block py-2 pl-3 pr-4 underline underline-offset-4 underline-orange rounded md:bg-transparent md:p-0" aria-current="page">Discover</a>
					</li>
					<li>
						<a href="#" class="block py-2 pl-3 pr-4 rounded md:p-0 md:dark:hover:bg-transparent">Deliver</a>
					</li>
					<li>
						<a href="#" class="block py-2 pl-3 pr-4 rounded md:p-0 md:dark:hover:bg-transparent">Results</a>
					</li>
					<li>
						<a href="#" class="block py-2 pl-3 pr-4 rounded md:p-0 md:dark:hover:bg-transparent">Documents</a>
					</li>
				</ul>
			</div>
			<div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
				<ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
					<li>
						<a href="#" class="block py-2 pl-3 pr-4 rounded md:p-0 md:dark:hover:bg-transparent" aria-current="page">Profile</a>
					</li>
					<li>
						<a href="#" class="block py-2 pl-3 pr-4 rounded md:p-0 md:dark:hover:bg-transparent">Messages</a>
					</li>
				</ul>
			</div>
			
		</div>
	</nav>
  );
}

export default NavBar;

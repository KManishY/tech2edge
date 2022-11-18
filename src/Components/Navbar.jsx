import React from "react";

const Navbar = () => {
	return (
		<div class="sticky-top">
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
				<img
					width="200px"
					src="https://tech2edge.co/assets/images/logo/t2e-logo-dark.png"
					alt="logo"
				/>
				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon" />
				</button>

				<div
					class="collapse navbar-collapse"
					id="navbarSupportedContent"
				>
					<ul class="navbar-nav ml-auto">
						<li class="nav-item active">
							<a class="nav-link">Home</a>
						</li>
						<li class="nav-item active">
							<a class="nav-link">WebSeries</a>
						</li>
						<li class="nav-item active">
							<a class="nav-link">Movies</a>
						</li>
					</ul>
					<form class="form-inline my-2 my-lg-0">
						<input
							class="form-control mr-sm-2"
							type="text"
							placeholder="Search For Movies"
							aria-label="Search"
						/>
						<button
							class="btn btn-outline-success my-2 my-sm-0"
							type="submit"
						>
							Search
						</button>
					</form>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;

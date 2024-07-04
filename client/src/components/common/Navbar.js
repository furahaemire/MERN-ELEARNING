import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (


		<nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
			<a  class="navbar-brand d-flex align-items-center px-4 px-lg-5">
				<h2 class="m-0 text-primary"><i class="fa fa-book me-3"></i><NavLink
					to="/"
				>
					eLEARNING
				</NavLink ></h2>
			</a>
			<button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarCollapse">
				<div class="navbar-nav ms-auto p-4 p-lg-0">

					<a  class="nav-item nav-link" ><NavLink
						to="/home"
					>
						Home
					</NavLink > </a>

					<a  class="nav-item nav-link" ><NavLink
						to="/cruds/new"
					>
						add
					</NavLink > </a>

					<a  class="nav-item nav-link" ><NavLink
						to="/cruds"
					>
						crud list
					</NavLink > </a>


					<a  class="nav-item nav-link" ><NavLink
						to="/cruds/grid-view"
					>
						Home-grid
					</NavLink > </a>

					<a  class="nav-item nav-link" ><NavLink
						to="./login"
					>
						Login
					</NavLink > </a>


				</div>
				<a  class="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Register<i class="fa fa-arrow-right ms-3"></i></a>
			</div>
		</nav>

	);
};

export default Navbar;

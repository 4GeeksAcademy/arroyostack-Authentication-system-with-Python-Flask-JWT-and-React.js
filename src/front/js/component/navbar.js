import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">

				<span className="navbar-brand mb-0 h1">JWT Auth Assessment</span>

				<div className="ml-auto">
					{store.token &&
						<button
							className="btn btn-primary"
							onClick={actions.logout}
						>Logout</button>
					}
				</div>
				{/* <div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
				</div> */}
			</div>
		</nav>
	);
};

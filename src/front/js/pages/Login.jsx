import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";


export const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const token = sessionStorage.getItem("token");
	const navigate = useNavigate();



	const handleSubmit = async (event) => {
		event.preventDefault()

		actions.login(email, password)

	}

	// Need to fix this.

	if (store.token && store.token != "" && typeof store.token !== "undefined") {
		navigate("/")
	}







	return (
		<div className="container d-flex justify-content-center mt-5">


			<main className="form-signin w-25">
				<form onSubmit={handleSubmit}>
					{/* <img className="mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" /> */}

					<h1 className="h3 mb-3 fw-normal">Sign in</h1>
					<p className="text-danger">Try this app. Email: steven@gmail.com Password: 4geeks</p>

					<div className="form-floating">
						<input
							type="email"
							className="form-control mb-3"
							id="floatingInput"
							placeholder="name@example.com"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>

						<label htmlFor="floatingInput">Email address</label>
					</div>
					<div className="form-floating">
						<input
							type="password"
							className="form-control mb-3"
							id="floatingInput"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>

						<label htmlFor="floatingInput">Email address</label>
					</div>


					<button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>

				</form>
			</main>
		</div>


	);
};

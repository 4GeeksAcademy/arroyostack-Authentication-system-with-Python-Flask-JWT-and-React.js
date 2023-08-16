import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const token = sessionStorage.getItem("token");
	const navigate = useNavigate();

	useEffect(() => {
		if (!sessionStorage.getItem("token")) {
			navigate("/login")
		}
	}, [token])


	return (
		<>
			<section className="mt-5" >
				<div className="container py-2 h-100">
					<div className="row d-flex justify-content-center align-items-center h-100">
						<div className="col col-lg-6 mb-4 mb-lg-0">

							{/* Need To Implement User Name in Context */}
							<div className="mb-3">
								<h3 className="text-danger">Hi there Steven</h3>
							</div>

							<div className="card mb-3" >
								<div className="row g-0">
									<div className="col-md-4 gradient-custom text-center text-white">
										<img src="https://images.mubicdn.net/images/cast_member/11190/cache-100907-1541095968/image-w856.jpg"
											alt="Avatar" className="img-fluid my-5 rounded" style={{ width: "80px" }} />
										<h5>Steven Wright</h5>
										<p>Comediant</p>
										<i className="far fa-edit mb-5"></i>
									</div>
									<div className="col-md-8">
										<div className="card-body p-4">
											<h6>Information</h6>
											<hr className="mt-0 mb-4" />
											<div className="row pt-1">
												<div className="col-6 mb-3">
													<h6>Email</h6>
													<p className="text-muted">steven@gmail.com</p>
												</div>
												<div className="col-6 mb-3">
													<h6>Phone</h6>
													<p className="text-muted">123 456 789</p>
												</div>
											</div>
											<h6>Films</h6>
											<hr className="mt-0 mb-4" />
											<div className="row pt-1">
												<div className="col-6 mb-3">
													<h6>Recent</h6>
													<p className="text-muted"><a
														className="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="https://www.youtube.com/watch?v=z65A_prOHL8">The Appointments of Dennis Jennings</a></p>
												</div>
												<div className="col-6 mb-3">
													<h6>Most Viewed</h6>
													<p className="text-muted"><a
														className="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
														href="https://www.youtube.com/watch?v=lFgJmfT10RM">When the Leaves Blow Away</a></p>
												</div>
											</div>
											<div className="d-flex justify-content-start">
												<a href="#!"><i className="fab fa-facebook-f fa-lg me-3"></i></a>
												<a href="#!"><i className="fab fa-twitter fa-lg me-3"></i></a>
												<a href="#!"><i className="fab fa-instagram fa-lg"></i></a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

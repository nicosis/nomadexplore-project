import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import palmImg from "/public/home-palm.jpg";

// style={{ backgroundImage: `url(${Palm})` }}

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid px-5 home-body" style={{ backgroundImage: `url(${palmImg})` }}>
			<div className="row">
				<div className="col-12 justify-content-center alig-content-center">
					<h1 className="home-title">DISCOVER THE PERFECT DESTINATION FOR YOU</h1>
				</div>
				<div className="col-12 container-btn-register">
						<Link to="/signup">
							<button className="btn-register">REGISTER AND ENJOY</button>
						</Link>
					</div>
				</div>
		</div>
	);
};

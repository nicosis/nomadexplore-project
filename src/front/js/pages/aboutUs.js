import React from "react";
import "../../styles/aboutUs.css"

export const AboutUs = () => {
  return (
    <div className="aboutUs-body">
      <div className="row">
        <div className="aboutUs-description col-sm-12 text-center">
          <h3 className="aboutUs-title">About NomadExplore</h3>
          <div className="aboutUs-text">
            <p className="mb-4">
            Discover your perfect tourist destination based on your visual preferences with NomadExplore. Our innovative web app offers a wide range of themed images related to tourist destinations. Simply select your favorite preferences, and our personalized recommendation algorithms will suggest destinations that match your unique tastes. Sign up now and embark on a tailored travel adventure with NomadExplore!
            </p>
          </div>
        </div>

        {/* <div className="circles-container">
          <div className="col-md-4 circle-container">
            <div className="circle">
              <div className="circle-content">
                <img src="https://media.istockphoto.com/id/1176438482/es/foto/escritor-de-blogs-de-estilo-de-vida-digital-o-persona-de-negocios-que-utiliza-un-dispositivo.jpg?s=612x612&w=0&k=20&c=kF2AmluvIf-dSTazUn-a8Ej8fmsh28US4MQm2doGPXo="
                  alt="Imagen 1"
                  className="circle-image" />
                <p className="Circle Imagen">SIGN UP & LOGIN</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 circle-container">
            <div className="circle">
              <div className="circle-content">
                <img src="https://media.istockphoto.com/id/828687016/es/foto/hombre-joven-con-un-globo-del-mundo-en-sus-manos.jpg?s=612x612&w=0&k=20&c=3pMkUD87BdyU3GwBtvGeQZvoAOmNykd28U6dl7OlMAQ="
                  alt="Imagen 1"
                  className="circle-image" />
                <p className="Circle Imagen">CHOOSE YOUR PREFERENCES</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 circle-container">
            <div className="circle">
              <div className="circle-content">
                <img src="https://media.istockphoto.com/id/1055429966/es/foto/adulto-joven-relajante-en-un-columpio-en-un-para%C3%ADso-tropical.jpg?s=612x612&w=0&k=20&c=CXC4QJeisbfAntBptsQnot81jiCLTPp-AQ_VvvSMEWY="
                  alt="Circle Imagen"
                  className="circle-image" />
                <p className="circle-text">ENJOY YOUR TRIP</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};
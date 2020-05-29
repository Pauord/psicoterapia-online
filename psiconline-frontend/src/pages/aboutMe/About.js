//@ts-check
import React from "react";
import NavBar from "../../components/navBar/NavBar";
import sobreMi from "../../img/collage.jpg";
import sobreMi2 from "../../img/yo.jpeg";
import Footer from "../../components/footer/Footer";
import "../aboutMe/about.css"
function About() {
  return (
    <>
      <NavBar />
      <div className="tituloAbout mt-5">
          <h1>Algo de mi historia....</h1>
        </div>
      <div>
        <div className="contenido d-flex flex-row p-5 m-5">
          <div className="imagen">
            <img
              src={sobreMi2}
              alt="Imagen Sobre Mí"
              style={{ width: 500, marginRight: 30 }}
            />
          </div>
          <div className="texto-nosotros text-justify">
            <h4 className="mb-4">Psicología y algo más</h4>

            <p>
              Proin consequat viverra sapien, malesuada tempor tortor feugiat
              vitae. In dictum felis et nunc aliquet molestie. Proin tristique
              commodo felis, sed auctor elit auctor pulvinar. Nunc porta, nibh
              quis convallis sollicitudin, arcu nisl semper mi, vitae sagittis
              lorem dolor non risus. Vivamus accumsan maximus est, eu mollis mi.
              Proin id nisl vel odio semper hendrerit. Nunc porta in justo
              finibus tempor. Suspendisse lobortis dolor quis elit suscipit
              molestie. Sed condimentum, erat at tempor finibus, urna nisi
              fermentum est, a dignissim nisi libero vel est. Donec et imperdiet
              augue. Curabitur malesuada sodales congue. Suspendisse potenti. Ut
              sit amet convallis nisi.
            </p>

            <p>
              Aliquam lectus magna, luctus vel gravida nec, iaculis ut augue.
              Praesent ac enim lorem. Quisque ac dignissim sem, non condimentum
              orci. Morbi a iaculis neque, ac euismod felis. Fusce augue quam,
              fermentum sed turpis nec, hendrerit dapibus ante. Cras mattis
              laoreet nibh, quis tincidunt odio fermentum vel. Nulla facilisi.
            </p>
          </div>
        </div>
        <div className="contenido d-flex flex-row p-5 m-5">
          <div className="texto-nosotros text-justify">
            <h4 className="mb-4">"Wanderlust", mi palabra favorita</h4>

            <p>
              Proin consequat viverra sapien, malesuada tempor tortor feugiat
              vitae. In dictum felis et nunc aliquet molestie. Proin tristique
              commodo felis, sed auctor elit auctor pulvinar. Nunc porta, nibh
              quis convallis sollicitudin, arcu nisl semper mi, vitae sagittis
              lorem dolor non risus. Vivamus accumsan maximus est, eu mollis mi.
              Proin id nisl vel odio semper hendrerit. Nunc porta in justo
              finibus tempor. Suspendisse lobortis dolor quis elit suscipit
              molestie. Sed condimentum, erat at tempor finibus, urna nisi
              fermentum est, a dignissim nisi libero vel est. Donec et imperdiet
              augue. Curabitur malesuada sodales congue. Suspendisse potenti. Ut
              sit amet convallis nisi.
            </p>

            <p>
              Aliquam lectus magna, luctus vel gravida nec, iaculis ut augue.
              Praesent ac enim lorem. Quisque ac dignissim sem, non condimentum
              orci. 
            </p>
          </div>
          <div className="imagen">
            <img
              src={sobreMi}
              alt="Imagen Sobre Mí"
              style={{ width: 500, marginLeft: 30 }}
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default About;

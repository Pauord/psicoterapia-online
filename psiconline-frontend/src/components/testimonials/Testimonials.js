//@ts-check
import React from "react";

import "./testimonials.css";
import avatar from "../../img/avatar1.jpg";
import avatar2 from "../../img/avatar2.jpg";
import avatar3 from "../../img/avatar3.jpg";
import cita from "../../img/citar.svg";
function Testimonials() {
  return (
    <div style={{ paddingTop:30, paddingBottom:30, marginTop:50, backgroundColor: "whitesmoke" }}>
      <div className="testimonios-contenedor">
        <h3 style={{ color: " rgb(82, 80, 80)" }}>TESTIMONIOS</h3>
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide text-center"
          data-ride="carousel"
        >
          <div className="carousel-inner ">
            <div className="carousel-item active">
              <div>
                <div className="imagen w-80 h-80">
                  <img
                    src={avatar}
                    style={{
                      width: 80,
                      borderRadius: "50%",
                      margin: 30,
                    }}
                  />
                </div>
                <div className="d-flex">
                  <img
                    src={cita}
                    style={{
                      width: 50,
                      marginBottom: 25,
                    }}
                  />
                  <p>
                    Quasi quibusdam, quos deserunt, recusandae iusto dolorem
                    voluptatibus quaerat veritatis consectetur culpa sit
                    dignissimos maiores iure id, magnam non voluptatum molestiae
                    doloremque.
                  </p>
                </div>
                <small className="text-muted">-Luciana Pérez-</small>
              </div>
            </div>
            <div className="carousel-item">
              <div>
                <div className="imagen w-80 h-80">
                  <img
                    src={avatar2}
                    style={{
                      width: 80,
                      borderRadius: "50%",
                      margin: 30,
                    }}
                  />
                </div>

                <div className="d-flex">
                  <img
                    src={cita}
                    style={{
                      width: 50,
                      marginBottom: 25,
                    }}
                  />
                  <p>
                    Quasi quibusdam, quos deserunt, recusandae iusto dolorem
                    voluptatibus quaerat veritatis consectetur culpa sit
                    dignissimos maiores iure id, magnam non voluptatum molestiae
                    doloremque.
                  </p>
                </div>
                <small className="text-muted">-Luciana Pérez-</small>
              </div>
            </div>
            <div className="carousel-item">
              <div>
                <div className="imagen w-80 h-80">
                  <img
                    src={avatar3}
                    style={{
                      width: 80,
                      borderRadius: "50%",
                      height: 120,
                      margin: 30,
                      objectFit: "cover",
                    }}
                  />
                </div>

                <div className="d-flex">
                  <img
                    src={cita}
                    style={{
                      width: 50,
                      marginBottom: 25,
                    }}
                  />
                  <p>
                    Quasi quibusdam, quos deserunt, recusandae iusto dolorem
                    voluptatibus quaerat veritatis consectetur culpa sit
                    dignissimos maiores iure id, magnam non voluptatum molestiae
                    doloremque.
                  </p>
                </div>
                <small className="text-muted">-Luciana Pérez-</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

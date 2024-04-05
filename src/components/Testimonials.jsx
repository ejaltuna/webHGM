import { motion } from "framer-motion";

import testimonial1 from "../assets/images/testimonial1.png";
import testimonial2 from "../assets/images/testimonial2.png";
import testimonial3 from "../assets/images/testimonial3.png";

import { useState } from "react";
import Carousel from "react-grid-carousel";
import { InvitationModal } from "./InvitationModal.jsx";

const DataProductos = [
  {
    codigo:"KS02",
    customerCorta: "Founder of Dashflow",
    customerLarga: "Kit de puerta corrediza con tubo de 25mm Cromado",
    url: "src/assets/images/ImgCatalogo/KS02.jpg",
    content:
      "kit para puertas de vidrio corredizas ideales para dividir espacios y ambientes, son de fácil instalación y de uso sencillo.",
    price: "80.00$",    
   },
  {
    codigo: "MA01",
    customerCorta: "Founder of Dashflow",
    customerLarga: "Manilla tipo H de 15x25 cm combinada (satinado y cromado)",
    url: "src/assets/images/ImgCatalogo/MA01.jpg",
    content:
      "Manilla pequeña tipo H ideal para puertas de baño, elegante y cómoda para el usuario.",

    price: "8.0$",
  },
  {
    codigo: "KTV2",
    customerCorta: "Founder of Dashflow",
    customerLarga: "Kit de puerta todo vision con freno incluido satinado",
    url: "src/assets/images/ImgCatalogo/KTV2.jpg",
    content:
      " kit todo vision para puertas de vidrio, utilizada principalmente para entradas de locales comerciales y tiendas. Alto rendimiento para un trafico elevado de personas durante el día.",

    price: "55.30$",
  },
  {
    codigo: "KS10",
    customerLarga: "Kit puerta corrediza con tubo rectangular dorado",
    customerCorta: "Founder of Dashflow",
    url: "src/assets/images/ImgCatalogo/KS10.jpg",
    content:
      "kit para puertas de baño corrediza con tubo rectangular de 2 metros en dorado, se utiliza para la división entre el espacio del baño y la ducha, muy elegante y mucha durabilidad.",

    price: "64.00$",
  },
  {
    codigo:"CV01",
    customerCorta: "Founder of Dashflow",
    customerLarga: "Corta-vidrio toyo plástico TC-30",
    url: "src/assets/images/ImgCatalogo/CV01.jpg",
    content:
      "cortador de vidrio plástico, herramienta que se utiliza para hacer las piezas a medida para cada trabajo de vidrio.",

    price: "7.54$",
  },
  {
    codigo:"RU01",
    customerCorta: "Founder of Dashflow",
    customerLarga: "Kit de ruedas colgantes con perforación.",
    url: "src/assets/images/ImgCatalogo/RU01.jpg",
    content:
      "par de ruedas colgantes que sujetan el vidrio con estabilidad y permite movilizarlo asi los lados.",
  
    price: "14.00$",
  },
  {
    codigo: "M03",
    customerLarga: "Muelas para pulir 10S40",
    customerCorta: "Founder of Dashflow",
    url: "src/assets/images/ImgCatalogo/M03.jpg",
    content:
      "muelas para maquinas de rectiliniado para vidrio, su funcion es pulir y sacar el brillo de las aristas del vidrio procesado.",
  
    price: "13.27$",
  },
  {
    codigo: "BS19",
    customerLarga: "Founder of Dashflow",
    customerCorta: "Bisagra pared/vidrio negra",
    url: "src/assets/images/ImgCatalogo/BS19.jpg",
    content:
      "Bisgra pared/vidrio para abrir y cerrar puertas de vidrio templado, tiene capacidad de aguantar 25kg cada bisagra, utilizada frecuentemente para puertas de baño.",
  
    price: "6.95$",
  },  
];

export const Testimonials = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [producto, setProducto] = useState([]);
  // console.log(producto, "id222");

  return (
    <section className="w-full flex justify-center pt-10 mb-16 lg:mb-32 bg-customDarkBg0 relative">
      <div className="absolute -top-16" id="productos" />
      <div className="flex flex-col w-full lg:w-[1150px] justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="custom-block-subtitle text-center mb-6">Catalogo</div>
          <div className="custom-block-big-title-black text-center mb-16 px-8 sm:px-24 md:px-48">
            Productos recomendados por <span className="font-bold">HGM</span>
          </div>

          <Carousel cols={5} showDots loop>
            {/* {products.map((val, i) => ( */}
            {DataProductos?.map((prod, i) => {
              return (
                <Carousel.Item>
                  <div className="bg-white p-4 rounded-lg border">
                    <div className="mt-1 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-1 xl:gap-x-8">
                      <div
                        className="group relative"
                        onClick={() => [
                          setIsModalOpen(true),
                          setProducto(prod),
                        ]}
                      >
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                          <img
                            src={prod.url}
                            alt="Front of men&#039;s Basic Tee in black."
                            className="h-full w-full object-cover object-center lg:h-full lg:w-full border-b-2"
                          />
                        </div>
                        <div className="mt-4 flex justify-between">
                          <div>
                            <h3 className="text-sm text-gray-700">
                              <a href="#">
                                <span
                                  aria-hidden="true"
                                  className="absolute inset-0"
                                ></span>
                                {prod.customerLarga}
                              </a>
                            </h3>
                            {/* <p className="mt-1 text-sm text-gray-500">
                              {prod.customerCorta}
                            </p> */}
                          </div>
                          <p className="text-sm font-medium text-gray-900">
                            {prod.price}
                          </p>
                        </div>
                      </div>

                      {/* <!-- More products... --> */}
                    </div>
                  </div>
                </Carousel.Item>
              );
            })}

            {/* ))} */}
          </Carousel>
        </motion.div>
      </div>
      {isModalOpen && (
        <InvitationModal
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          producto={producto}
        />
      )}
    </section>
  );
};

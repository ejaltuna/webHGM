import { motion } from "framer-motion";

import { AmazonLogo } from "../assets/logos/AmazonLogo";
import { DropboxLogo } from "../assets/logos/DropboxLogo";
import { NetflixLogo } from "../assets/logos/NetflixLogo";
import { SlackLogo } from "../assets/logos/SlackLogo";
import { SpotifyLogo } from "../assets/logos/SpotifyLogo";
import { StripeLogo } from "../assets/logos/StripeLogo";
import Carousel from "react-grid-carousel";
import Modaldetailproducto from "../components/Modaldetailproducto.jsx";
import { useState } from "react";
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

    price: "55.30",
  },
  {
    codigo: "KS10",
    customerLarga: "Kit puerta corrediza con tubo rectangular dorado",
    customerCorta: "Founder of Dashflow",
    url: "src/assets/images/ImgCatalogo/KS10.jpg",
    content:
      "kit para puertas de baño corrediza con tubo rectangular de 2 metros en dorado, se utiliza para la división entre el espacio del baño y la ducha, muy elegante y mucha durabilidad.",

    price: "64.00",
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
    customerLargo: "Kit de ruedas colgantes con perforación.",
    url: "src/assets/images/ImgCatalogo/RU01.jpg",
    content:
      "par de ruedas colgantes que sujetan el vidrio con estabilidad y permite movilizarlo asi los lados.",
  
    price: "14.00$",
  },
  {
    codigo: "M03",
    customerLargo: "Muelas para pulir 10S40",
    customerCorta: "Founder of Dashflow",
    url: "src/assets/images/ImgCatalogo/M03.jpg",
    content:
      "muelas para maquinas de rectiliniado para vidrio, su funcion es pulir y sacar el brillo de las aristas del vidrio procesado.",
  
    price: "13.27$",
  },
  {
    codigo: "BS19",
    customerLargo: "Founder of Dashflow",
    customerCorta: "Bisagra pared/vidrio negra",
    url: "src/assets/images/ImgCatalogo/BS19.jpg",
    content:
      "Bisgra pared/vidrio para abrir y cerrar puertas de vidrio templado, tiene capacidad de aguantar 25kg cada bisagra, utilizada frecuentemente para puertas de baño.",
  
    price: "6.95",
  },  
];
export const Brands = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [producto, setProducto] = useState([]);
  console.log(producto, "id");
  return (
    <section className="py-12 sm:py-24 bg-customDarkBg1 w-full mt-16 mb-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container px-4 mx-auto 2xl:w-[1200px] xl:w-[1100px] lg:w-[1000px] md:w-4/5">
          <div className="flex lg:flex-row flex-col items-center -mx-4 justify-center lg:text-left text-center">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div className="flex flex-col">
                <h2 className="mb-2  text-4xl sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-black">
                  No te lo pierdas!
                </h2>
                <h2 className=" text-3xl  sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-customSecondary">
                  ultimos mas Vendidos
                </h2>
              </div>
            </div>
            <div className="w-2/4 sm:w-[620px] lg:w-1/2 mx-auto lg:mx-0 lg:pl-10">
              <div className="flex flex-wrap -m-4">
                <Carousel cols={2} showDots loop>
                  {DataProductos?.map((prod, i) => {
                    return (
                      <Carousel.Item>
                        <div className="bg-white p-2 rounded-lg border flex justify-center text-center">
                          <div className="mt-1 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-1 lg:grid-cols-1 xl:gap-x-8">
                            <div className="group relative">
                              <div
                                className="aspect-h-1 aspect-w-1 w-[70%] mx-auto overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 cursor-pointer "
                                onClick={() => [
                                  setIsModalOpen(true),
                                  setProducto(prod),
                                ]}
                              >
                                <img
                                  src={prod.url}
                                  alt="Front of men&#039;s Basic Tee in black."
                                  className="h-full w-full object-cover object-center lg:h-full lg:w-full border-b-2"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Carousel.Item>
                    );
                  })}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
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

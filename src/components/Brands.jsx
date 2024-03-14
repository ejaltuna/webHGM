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

const testimonialsData = [
  {
    
    customerName: "John Watkins",
    customerTitle: "Founder of Dashflow",
    url: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    content:
      "The powerful analytic tools have helped us streamline our processes and make data-driven decisions that positively impact our efficiency. Tailcast has been a game-changer for our business. The platform is easy to use, and the insights we've gained have driven significant improvements.",

    price: "32.00",
  },
  {
    customerName: "John Watkins",
    customerTitle: "Founder of Dashflow",
    url: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    content:
      "The powerful analytic tools have helped us streamline our processes and make data-driven decisions that positively impact our efficiency. Tailcast has been a game-changer for our business. The platform is easy to use, and the insights we've gained have driven significant improvements.",

    price: "32.00",
  },
  {
    customerName: "John Watkins",
    customerTitle: "Founder of Dashflow",
    url: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    content:
      "The powerful analytic tools have helped us streamline our processes and make data-driven decisions that positively impact our efficiency. Tailcast has been a game-changer for our business. The platform is easy to use, and the insights we've gained have driven significant improvements.",

    price: "32.00",
  },
  {
    customerName: "John Watkins",
    customerTitle: "Founder of Dashflow",
    url: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    content:
      "The powerful analytic tools have helped us streamline our processes and make data-driven decisions that positively impact our efficiency. Tailcast has been a game-changer for our business. The platform is easy to use, and the insights we've gained have driven significant improvements.",

    price: "32.00",
  },
  {
    customerName: "John Watkins",
    customerTitle: "Founder of Dashflow",
    url: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    content:
      "The powerful analytic tools have helped us streamline our processes and make data-driven decisions that positively impact our efficiency. Tailcast has been a game-changer for our business. The platform is easy to use, and the insights we've gained have driven significant improvements.",

    price: "32.00",
  },
  {
    customerName: "John Watkins",
    customerTitle: "Founder of Dashflow",
    url: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    content:
      "The powerful analytic tools have helped us streamline our processes and make data-driven decisions that positively impact our efficiency. Tailcast has been a game-changer for our business. The platform is easy to use, and the insights we've gained have driven significant improvements.",

    price: "32.00",
  },
];
export const Brands = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [producto, setProducto] =  useState([]);
  console.log(producto,'id')
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
                  {testimonialsData?.map((prod, i) => {
                    return (
                      <Carousel.Item>
                        <div className="bg-white p-2 rounded-lg border flex justify-center text-center">
                          <div className="mt-1 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-1 lg:grid-cols-1 xl:gap-x-8">
                            <div className="group relative">
                              <div className="aspect-h-1 aspect-w-1 w-[70%] mx-auto overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 cursor-pointer "
                                onClick={() => [setIsModalOpen(true), setProducto(prod)]}>
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
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} producto={producto} />
      )}
    </section>
  );
};

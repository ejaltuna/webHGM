import { motion } from "framer-motion";

import { QuoteIcon } from "../assets/icons/QuoteIcon";
import testimonial1 from "../assets/images/testimonial1.png";
import testimonial2 from "../assets/images/testimonial2.png";
import testimonial3 from "../assets/images/testimonial3.png";
import React from "react";
import Carousel from "react-grid-carousel";
const testimonialsData = [
  {
    customerName: "John Watkins",
    customerTitle: "Founder of Dashflow",
    url: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    content:
      "The powerful analytic tools have helped us streamline our processes and make data-driven decisions that positively impact our efficiency. Tailcast has been a game-changer for our business. The platform is easy to use, and the insights we've gained have driven significant improvements.",
    image: testimonial1,
    price: "32.00",
  },
  {
    customerName: "John Watkins",
    customerTitle: "Founder of Dashflow",
    url: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    content:
      "The powerful analytic tools have helped us streamline our processes and make data-driven decisions that positively impact our efficiency. Tailcast has been a game-changer for our business. The platform is easy to use, and the insights we've gained have driven significant improvements.",
    image: testimonial2,
    price: "32.00",
  },
  {
    customerName: "John Watkins",
    customerTitle: "Founder of Dashflow",
    url: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    content:
      "The powerful analytic tools have helped us streamline our processes and make data-driven decisions that positively impact our efficiency. Tailcast has been a game-changer for our business. The platform is easy to use, and the insights we've gained have driven significant improvements.",
    image: testimonial3,
    price: "32.00",
  },
  {
    customerName: "John Watkins",
    customerTitle: "Founder of Dashflow",
    url: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    content:
      "The powerful analytic tools have helped us streamline our processes and make data-driven decisions that positively impact our efficiency. Tailcast has been a game-changer for our business. The platform is easy to use, and the insights we've gained have driven significant improvements.",
    image: testimonial3,
    price: "32.00",
  },
  {
    customerName: "John Watkins",
    customerTitle: "Founder of Dashflow",
    url: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    content:
      "The powerful analytic tools have helped us streamline our processes and make data-driven decisions that positively impact our efficiency. Tailcast has been a game-changer for our business. The platform is easy to use, and the insights we've gained have driven significant improvements.",
    image: testimonial3,
    price: "32.00",
  },
  {
    customerName: "John Watkins",
    customerTitle: "Founder of Dashflow",
    url: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    content:
      "The powerful analytic tools have helped us streamline our processes and make data-driven decisions that positively impact our efficiency. Tailcast has been a game-changer for our business. The platform is easy to use, and the insights we've gained have driven significant improvements.",
    image: testimonial3,
    price: "32.00",
  },
  {
    customerName: "John Watkins",
    customerTitle: "Founder of Dashflow",
    url: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    content:
      "The powerful analytic tools have helped us streamline our processes and make data-driven decisions that positively impact our efficiency. Tailcast has been a game-changer for our business. The platform is easy to use, and the insights we've gained have driven significant improvements.",
    image: testimonial3,
    price: "32.00",
  },
  {
    customerName: "John Watkins",
    customerTitle: "Founder of Dashflow",
    url: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    content:
      "The powerful analytic tools have helped us streamline our processes and make data-driven decisions that positively impact our efficiency. Tailcast has been a game-changer for our business. The platform is easy to use, and the insights we've gained have driven significant improvements.",
    image: testimonial3,
    price: "32.00",
  },
  
];

export const Testimonials = () => (
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
          {testimonialsData?.map((prod, i) => {
            return (
              <Carousel.Item>
                <div className="bg-white p-4 rounded-lg border">
                  <div className="mt-1 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-1 xl:gap-x-8">
                    <div className="group relative">
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
                              {prod.customerTitle}
                            </a>
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">
                            {prod.customerName}
                          </p>
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
  </section>
);

import { motion, AnimatePresence } from "framer-motion";

import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import { CloseIcon } from "../assets/icons/CloseIcon";
import { TailcastLogo } from "../assets/logos/TailcastLogo";

export const InvitationModal = ({ setIsOpen, producto }) => {
  console.log(producto, "id en modalssss");
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, zIndex: 50 }}
          animate={{ opacity: 1, zIndex: 50 }}
          transition={{ duration: 0.1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className=" w-full h-full  bg-customDarkBgTransparentDarker fixed top-0 left-0 flex  z-50 justify-center items-center"
            onClick={() => setIsOpen(false)}
          >
            <div
              className="w-full h-screen sm:h-auto sm:w-3/4 md:w-3/5 lg:w-[1000px] xl:w-[1100px] sm:rounded-2xl bg-customDarkBgTransparentLighter custom-border-gray-darker py-2 px-2 sm:px-5 backdrop-blur-xl  sm:mb-8 fixed mx-auto z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="bg-[#352046] p-2 rounded-xl text-white font-bold z-50 text-center w-10 ml-auto cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                X
              </div>
              <div class="bg-white p-1 rounded-xl overflow-auto touch-auto md:grid md:grid-cols-2 h-[29rem] md:h-[32rem]">
                {/* <!-- Image gallery --> */}
                <div class="mx-auto mt-6 max-w-xl sm:px-2 lg:grid lg:max-w-2xl lg:grid-cols-3 lg:gap-x-2 lg:px-2">
                  <div class="aspect-h-2 aspect-w-2 hidden overflow-hidden rounded-lg lg:block">
                    <img
                      src={producto.url}
                      alt="Two each of gray, white, and black shirts laying flat."
                      class="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                    <div class="aspect-h-1 aspect-w-3 overflow-hidden rounded-lg">
                      <img
                        src={producto.url}
                        alt="Model wearing plain black basic tee."
                        class="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div class="aspect-h-1 aspect-w-3 overflow-hidden rounded-lg">
                      <img
                        src={producto.url}
                        alt="Model wearing plain gray basic tee."
                        class="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <div class="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                    <img
                      src={producto.url}
                      alt="Model wearing plain white basic tee."
                      class="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>

                {/* <!-- Product info --> */}
                <div class="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                  <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-4">
                    <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                     {producto.customerName}
                    </h1>
                  </div>

                  {/* <!-- Options --> */}
                  <div class="mt-4 lg:row-span-3 lg:mt-0">
                    <h2 class="sr-only">Product information</h2>
                    <p class="text-3xl tracking-tight text-gray-900">{producto.price}</p>

                    {/* <!-- Reviews --> */}
                    <div class="mt-6">
                      <h3 class="sr-only">Reviews</h3>
                      <div class="flex items-center">
                        <div class="flex items-center">
                          {/* <!-- Active: "text-gray-900", Default: "text-gray-200" --> */}
                          <svg
                            class="text-gray-900 h-5 w-5 flex-shrink-0"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <svg
                            class="text-gray-900 h-5 w-5 flex-shrink-0"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <svg
                            class="text-gray-900 h-5 w-5 flex-shrink-0"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <svg
                            class="text-gray-900 h-5 w-5 flex-shrink-0"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <svg
                            class="text-gray-200 h-5 w-5 flex-shrink-0"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                        <p class="sr-only">4 out of 5 stars</p>
                        <a
                          href="#"
                          class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          117 reviews
                        </a>
                      </div>
                    </div> 
                    {/* <form class="mt-10"> */}
                      {/* <!-- Colors --> */}
                      {/* <div>
                        <h3 class="text-sm font-medium text-gray-900">Color</h3>

                        <fieldset class="mt-4">
                          <legend class="sr-only">Choose a color</legend>
                          <div class="flex items-center space-x-3">
                       
                            <label class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
                              <input
                                type="radio"
                                name="color-choice"
                                value="White"
                                class="sr-only"
                                aria-labelledby="color-choice-0-label"
                              />
                              <span id="color-choice-0-label" class="sr-only">
                                White
                              </span>
                              <span
                                aria-hidden="true"
                                class="h-8 w-8 bg-white rounded-full border border-black border-opacity-10"
                              ></span>
                            </label>
                         
                            <label class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
                              <input
                                type="radio"
                                name="color-choice"
                                value="Gray"
                                class="sr-only"
                                aria-labelledby="color-choice-1-label"
                              />
                              <span id="color-choice-1-label" class="sr-only">
                                Gray
                              </span>
                              <span
                                aria-hidden="true"
                                class="h-8 w-8 bg-gray-200 rounded-full border border-black border-opacity-10"
                              ></span>
                            </label>
                           
                            <label class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-900">
                              <input
                                type="radio"
                                name="color-choice"
                                value="Black"
                                class="sr-only"
                                aria-labelledby="color-choice-2-label"
                              />
                              <span id="color-choice-2-label" class="sr-only">
                                Black
                              </span>
                              <span
                                aria-hidden="true"
                                class="h-8 w-8 bg-gray-900 rounded-full border border-black border-opacity-10"
                              ></span>
                            </label>
                          </div>
                        </fieldset>
                      </div> */}

                      {/* <!-- Sizes --> */}
                      {/* <div class="mt-10">
                        <div class="flex items-center justify-between">
                          <h3 class="text-sm font-medium text-gray-900">
                            Size
                          </h3>
                          <a
                            href="#"
                            class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Size guide
                          </a>
                        </div>
                      </div> */}

                      {/* <button
                        type="submit"
                        class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Add to bag
                      </button> */}
                    {/* </form> */}
                  </div>

                  <div class="py-3 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                    {/* <!-- Description and details --> */}
                    <div> 
                      <div class="space-y-6">
                        <h3 class="text-base text-gray-900 font-semibold " >
                           {producto.customerLarga}
                        </h3>
                      </div>
                    </div>

                    <div class="mt-10">
                      <h2 class="text-sm font-medium text-gray-900">Descripcion</h2>

                      <div class="mt-4 space-y-6">
                        <p class="text-sm text-gray-600">
                        {producto.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

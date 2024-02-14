import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import { Box, Grid, LinearProgress, Rating } from "@mui/material";
import { Button } from "@mui/base";
import ProductReviewCard from "./ProductReviewCard";
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard'
import {mens_kurta} from '../../../data/mens_kurta.js'
import { useNavigate } from "react-router-dom";
const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
  const navigate = useNavigate()
const handleAddToCart =()=>{
navigate('/cart')
}
  return (
    <div className="bg-black text-gray-200">
      <div className="pt-3">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-200"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-300 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 pt-10 px-4 ">
          {/* Image gallery */}
          <div className="flex flex-col items-center ">
            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
              <img
                src={product.images[0].src}
                alt={product.images[0].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-wrap space-x-5 justify-center">
              {product.images.map((item) => (
                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:col-span-1 max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="lg:col-span-2 ">
              <h1 className="text-lg lg:text-xl font-semibold text-gray-200">
                Lorem ipsum dolor
              </h1>
              <h1 className="text-lg lg:text-xl text-gray-200 pt-1 opacity-60">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <div className="flex space-x-5 text-lg lg:text-xl items-center text-gray-200 mt-6">
                <p className="font-semibold">₹199</p>
                <p className="opacity-50 line-through">₹299</p>
                <p className="text-green-600 font-semibold">50% off</p>
              </div>

              {/* Reviews */}
              <div className="mt-6">
                <div className="flex items-center space-x-3">
                  <Rating name="read-only" value={4.5} readOnly />
                  <p className="opacity-60 text-sm ">678678 Ratings</p>
                  <p className="ml-3 font-semibold hover:text-indigo-500 text-indigo-600 text-sm ">
                    12314 reviews
                  </p>
                </div>
              </div>

              <form className="mt-10">
                {/* Colors */}

                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-200">Size</h3>
                  </div>

                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="mt-4"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a size
                    </RadioGroup.Label>
                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                      {product.sizes.map((size) => (
                        <RadioGroup.Option
                          key={size.name}
                          value={size}
                          disabled={!size.inStock}
                          className={({ active }) =>
                            classNames(
                              size.inStock
                                ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                : "cursor-not-allowed bg-gray-50 text-gray-200",
                              active ? "ring-2 ring-indigo-500" : "",
                              "group relative flex items-center  justify-center rounded-md border py-3 px-4 text-md font-medium uppercase  focus:outline-none sm:flex-1 sm:py-6"
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <RadioGroup.Label as="span">
                                {size.name}
                              </RadioGroup.Label>

                              <span
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-px rounded-md border-2 "
                              >
                                <svg
                                  className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                  viewBox="0 0 100 100"
                                  preserveAspectRatio="none"
                                  stroke="currentColor"
                                ></svg>
                              </span>
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <button
                onClick={handleAddToCart}
                  type="submit"
                  className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white mt-5 transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none hover:bg-opacity-90"
                >
                  Add to cart
                </button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-200">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-200">
                  Highlights
                </h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-200">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* rating and reviews */}
        <section>
          <h1 className="text-lg pb-4 font-semibold text-center">Recent Review & Rating</h1>
          <div className="p-10">
            <Grid container spacing={7}>
              <Grid item xs={7}>
                <div className="space-y-5">
                  {[1, 1, 1].map((item) => (
                    <ProductReviewCard />
                  ))}
                </div>
              </Grid>
              <Grid item xs={5}>
                <h1 className="text-xl font-semibold pb-2 ">Product Ratings</h1>
                <div className="flex items-center space-x-3">
                  <Rating
                    name="half-rating"
                    defaultValue={4.5}
                    precision={0.5}
                    readOnly
                  />
                  <p className="opacity-60 ">54232 reviews</p>
                </div>
                <Box>
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    gap={2}
                    marginTop={3}
                  >
                    <Grid
                     
                      alignContent={"center"}
                 
                      item
                      xs={2}
                    >
                      <p className="text-lg font-semibold">Excellent</p>
                    </Grid>
                    <Grid item xs={7}>
                      <div class="w-full bg-gray-200 rounded-full h-2.5  dark:bg-gray-700">
                        <div
                          class="bg-blue-400 h-2.5 rounded-full"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    gap={2}
                    marginTop={3}
                  >
                    <Grid
                     
                      alignContent={"center"}
                   
                      item
                      xs={2}
                    >
                      <p className="text-lg font-semibold">Very Good</p>
                    </Grid>
                    <Grid item xs={7}>
                      <div class="w-full bg-gray-200 rounded-full h-2.5  dark:bg-gray-700">
                        <div
                          class="bg-yellow-400 h-2.5 rounded-full"
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    gap={2}
                    marginTop={3}
                  >
                    <Grid
                  
                      alignContent={"center"}
                    
                      item
                      xs={2}
                    >
                      <p className="text-lg font-semibold">Good</p>
                    </Grid>
                    <Grid item xs={7}>
                      <div class="w-full bg-gray-200 rounded-full h-2.5  dark:bg-gray-700">
                        <div
                          class="bg-pink-600 h-2.5 rounded-full"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    gap={2}
                    marginTop={3}
                  >
                    <Grid
                  
                      alignContent={"center"}
                
                      item
                      xs={2}
                    >
                      <p className="text-lg font-semibold">Avarage</p>
                    </Grid>
                    <Grid item xs={7}>
                      <div class="w-full bg-gray-200 rounded-full h-2.5  dark:bg-gray-700">
                        <div
                          class="bg-red-500 h-2.5 rounded-full"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    gap={2}
                    marginTop={3}
                  >
                    <Grid
                      
                      alignContent={"center"}
                      
                      item
                      xs={2}
                    >
                      <p className="text-lg font-semibold">Poor</p>
                    </Grid>
                    <Grid item xs={7}>
                      <div class="w-full bg-gray-200 rounded-full h-2.5  dark:bg-gray-700">
                        <div
                          class="bg-yellow-400 h-2.5 rounded-full"
                          style={{ width: "30%" }}
                        ></div>
                      </div>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </div>
        </section>
        {/* similer product */}
        <h1 className="py-5 text-3xl font-semibold  text-center">Similar Products</h1>
        <div className="flex flex-wrap space-y-5 justify-center">
          {mens_kurta.map((item) => (
            <HomeSectionCard product={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

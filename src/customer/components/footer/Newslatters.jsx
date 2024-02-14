import React from 'react'

const Newslatters = () => {
  return (
    <div className=" container mt-20 mx-auto md:px-6 ">

  <section className="mb-32">
   
    <div className="container px-6 md:px-12">
      <div
        className="block rounded-lg bg-red-500 px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  dark:shadow-black/20 md:py-16 md:px-12 mt-[-100px] ">
        <div className="flex flex-wrap justify-center text-center lg:text-left">
          <div className="w-full shrink-0 grow-0 basis-auto md:px-6 xl:w-10/12">
            <div className="grid items-center gap-x-6 lg:grid-cols-2">
              <div className="mb-10 lg:mb-0">
                <h2 className="text-3xl font-bold">
                  Do not miss any updates.
                  <br />
                  <span className="text-primary dark:text-primary-400">Subscribe to the newsletter</span>
                </h2>
              </div>

              <div className="mb-6 flex-row md:mb-0 md:flex">
                <div className="relative mb-3 w-full md:mr-3 md:mb-0" data-te-input-wrapper-init>
                  <input type="text"
                    className="peer block min-h-[auto] w-full rounded  border border-white bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="examplehtmlFormControlInput2" placeholder="Enter your email" />
                  <label htmlFor="examplehtmlFormControlInput2"
                    className="peer-focus:bg-red-500 peer-focus:ml-2 peer-focus:mr-2 pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Enter
                    your email
                  </label>
                 
                </div>
                <button type="submit"
                  className="inline-block rounded bg-primary px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-black border bg-white hover:bg-slate-300 border-black"
                  data-te-ripple-init data-te-ripple-color="light">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</div>

  )
}

export default Newslatters
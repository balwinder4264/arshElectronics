

import { ChevronRightIcon } from '@heroicons/react/solid'


export default function Example() {
  return (
    <main className=' bg-gray-900 h-screen'>
      <div className="pt-10  sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
              <div className="lg:py-24">

                <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                  <span className="block">Electric Shop</span>
                  <span className="block text-indigo-400">Quality Work</span>
                </h1>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  We provide best service in sahlon village. We are located in in village sahlon shoot a email or contact us.
                </p>
                <div className="mt-10 sm:mt-12">
                  <form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
                    <div className="sm:flex">
                      {/* <div className="min-w-0 flex-1">
                        <label htmlFor="email" className="sr-only">
                          Email address
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                        />
                      </div> */}
                      <div className="mt-3 sm:mt-0 sm:ml-3">
                        <button
                          type="submit"
                          className="block w-full py-3 px-4 rounded-md shadow bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                        >
                          Conatc us
                        </button>
                      </div>
                    </div>
                    {/* <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                      Start your free 14-day trial, no credit card necessary. By providing your email, you agree to
                      our{' '}
                      <a href="#" className="font-medium text-white">
                        terms of service
                      </a>
                      .
                    </p> */}
                  </form>
                </div>
              </div>
            </div>
            <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                <img
                  className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="https://tailwindui.com/img/component-images/cloud-illustration-indigo-400.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* More main page content here... */}
    </main>

  )
}

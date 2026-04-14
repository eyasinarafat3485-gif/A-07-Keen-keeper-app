import React from 'react';

const Errorpage = () => {
    return (
        <div class="min-h-screen flex items-center justify-center bg-gray-50 px-6">
            <div class="text-center max-w-lg">
                <p class="text-9xl font-bold text-indigo-600 opacity-20">404</p>

                <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Page not found
                </h1>
                <p class="mt-6 text-base leading-7 text-gray-600">
                    Sorry, we couldn’t find the page you’re looking for. Let's get you back on track.
                </p>

                <div class="mt-10 flex items-center justify-center gap-x-6">
                    <a href="/" class="rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Go back home
                    </a>
                    
                </div>
            </div>
        </div>
       
    );
};

export default Errorpage;
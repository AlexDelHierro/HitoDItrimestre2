import React from "react";

export const Subscribe = () => {
  return (
    <div className="my-7 bg-gray-200/40 py-6">
      <div className="space-y-3">
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-800">
          Suscribete a nuestro canal para no perderte ningua oferta{" "}
          
        </h2>
        <p className="text-center text-base font-normal text-slate-600">
          Obten un 20% de descuento en tu primera compra
        </p>
      </div>
      <div className="mt-3 flex justify-center">
        <form>
          <div className="sm:flex">
            <input
              type="email"
              name="subscribe"
              placeholder="Introduce tu Email"
              className=" justify-center flex rounded-md py-2 px-2 shadow border focus:outline focus:outline-green-700 shadow-gray-400"
            />
            <button className="bg-green-900 text-white mt-3 sm:mt-0 ml-0 sm:ml-2 px-5 py-2 rounded-md border border-stone-600 focus:ring-2 ring-yellow-500 hover:bg-gray-400 duration-100 ease-linear">
              Suscribirse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

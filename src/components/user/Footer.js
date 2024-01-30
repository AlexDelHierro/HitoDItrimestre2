import React from "react";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import image from "../../images/playstore.png";

export const Footer = () => {
  return (
    <footer className="px-2 sm:px-0">
      <div className="w-full h-auto bg-gray-100">
        <div className="container mx-auto py-4">
          <div className="grid gap-5  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="">
              <h1 className="text-2xl text-green-900 font-semibold">
                loto.net
              </h1>
              <div className="space-y-2 mt-2">
                <p className="font-medium text-base">Contacto</p>
                <div className="flex space-x-2">
                  <p className="text-2xl text-green-900">
                    <AiOutlineWhatsApp />
                  </p>
                  <div className="text-sm">
                    <p>WhatsApp</p>
                    <p>+34 689475127</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <p className="text-2xl text-green-900">
                    <AiOutlinePhone />
                  </p>
                  <div className="text-sm">
                    <p>Llamanos</p>
                    <p>+34 689475127</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <p className="text-2xl text-green-900">
                    <AiOutlineMail />
                  </p>
                  <div className="text-sm">
                    <p>Email</p>
                    <p>loto@info.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <h1 className="text-base text-green-900 font-medium">
                Categorias populares
              </h1>
              <div className="flex flex-col mt-4 font-normal">
                <Link
                  to="/"
                  className="hover:text-green-900 hover:ml-1 duration-100 ease-linear"
                >
                  Muebles
                </Link>
                <Link
                  to="/"
                  className="hover:text-green-900 hover:ml-1 duration-100 ease-linear"
                >
                  Cocina y casa
                </Link>
                <Link
                  to="/"
                  className="hover:text-green-900 hover:ml-1 duration-100 ease-linear"
                >
                  Juguetes
                </Link>
                <Link
                  to="/"
                  className="hover:text-green-900 hover:ml-1 duration-100 ease-linear"
                >
                  Electronica
                </Link>
              </div>
            </div>
            <div className="">
              <h1 className="text-base text-green-900 font-medium">
                Servicios del consumidor
              </h1>
              <div className="flex flex-col mt-4 font-normal">
                <Link
                  to="/"
                  className="hover:text-green-900 hover:ml-1 duration-100 ease-linear"
                >
                  Sobre nosotros
                </Link>
                <Link
                  to="/"
                  className="hover:text-green-900 hover:ml-1 duration-100 ease-linear"
                >
                  terminos y condiciones
                </Link>
                <Link
                  to="/"
                  className="hover:text-green-900 hover:ml-1 duration-100 ease-linear"
                >
                  FAQ
                </Link>
                <Link
                  to="/"
                  className="hover:text-green-900 hover:ml-1 duration-100 ease-linear"
                >
                  Términos de privacidad
                </Link>
                <Link
                  to="/"
                  className="hover:text-green-900 hover:ml-1 duration-100 ease-linear"
                >
                  Términos de canclacion y devolucion
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

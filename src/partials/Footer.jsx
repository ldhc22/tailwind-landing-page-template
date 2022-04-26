import React from 'react';
import { Link } from 'react-router-dom';
import DanseFecha from "../images/K & D-330.jpg";
import LoveTwo from "../images/love-svgrepo-com.svg";

function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">

          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="text-sm text-gray-600">
              <Link to="#" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Te</Link> <Link to="#" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Esperamos</Link>
            </div>
          </div>

          <div className="relative inline-flex flex-col">
                    <img
                      className="md:max-w-none mx-auto rounded"
                      src={DanseFecha}
                      width="500"
                      height="462"
                      alt="Features bg"
                    />
          </div>         

        </div>

        {/* Bottom area */}
        <div className="flex items-center justify-between py-4 md:py-8 border-t border-gray-200">

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">Made by <a className="text-danse-pink-500 hover:underline">Danse</a> 2022</div>

          {/* Social links */}
          <ul className="flex justify-right mb-4 md:order-1 md:ml-4 md:mb-0">
            <li className="ml-4">
              <div className="h-14 w-14 flex text-center bg-danse-baige-100 rounded-full shadow flex-shrink-0 ml-3">
                <img className="w-1/2 h-1/2 m-auto" src={LoveTwo} alt="Pin" />
              </div>
            </li>
          </ul>

        </div>

      </div>
    </footer>
  );
}

export default Footer;

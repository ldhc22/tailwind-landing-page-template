import React, { useState, useRef, useEffect } from "react";
import Transition from "../utils/Transition";

import DanseGift from "../images/K & D-440.jpg";
import GiftPin from "../images/gift-svgrepo-com.svg";

function Presents() {
  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height =
        tabs.current.children[tab - 1].offsetHeight + "px";
    }
  };

  useEffect(() => {
    heightFix();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-10 md:pb-12 text-danse-green-500">
            <h1 className="h2 mb-4">Mesa de Regalos</h1>
            <p className="text-xl text-danse-green-500">
              "El mejor regalo es un abrazo. Es talla única y a nadie le importa que se lo devuelvas"
            </p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/* Content */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
              data-aos="fade-right"
            >
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 1
                      ? "bg-white shadow-md border-danse-baige-100 hover:shadow-lg"
                      : "bg-danse-baige-100 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(1);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                    Lo único que queremos para nuestra boda es tu presencia
                    </div>
                    <div className="text-gray-600">
                    Pero, si deseas regalarnos algo, tenemos una mesa de regalos en Liverpool.
                  Puedes darle clic a nuestra imagen para ver las opciones
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-10 h-10 bg-danse-pink-100 rounded-full shadow flex-shrink-0 ml-3">
                    <img className="w-1/2 h-1/2 m-auto" src={GiftPin} alt="Pin" />
                  </div>
                </a>
              </div>
            </div>

            {/* Tabs items */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
              data-aos="zoom-y-out"
              ref={tabs}
            >
              <div className="relative flex flex-col text-center lg:text-right">
                {/* Item 1 */}
                <Transition
                  show={tab === 1}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img
                      onClick="https://mesaderegalos.liverpool.com.mx/milistaderegalos/50859493"
                      className="md:max-w-none mx-auto rounded"
                      src={DanseGift}
                      width="346"
                      alt="Features bg"
                    />
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Presents;

'use client';

import { Info } from "lucide-react";
import Image from "next/image";
import { useState } from 'react';
export default function ModalSobre() {

  const [open, setOpen] = useState(false);

  return (
    <>
      {/* BOTÃO */}
      <button
        onClick={() => setOpen(true)}
        className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-lg text-sm font-semibold transition flex items-center gap-2"
      >
        <Info className="w-4 h-4 " />
        Sobre
      </button>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 border border-gray-700 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden">

            {/* CABEÇALHO */}
            <div className="bg-gray-800 border-b border-gray-700 px-6 py-4 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-white">
                  Sobre
                </h2>

              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-white text-xl leading-none transition"
              >
                ✕
              </button>
            </div>

            {/* CONTEÚDO */}
            <div className="p-6  ">
              <p className="text-gray-300">
                
                <Image
                width={50}
                height={50}
                src="/git.png"
                className="bg-white"
                alt="teste"
                />
            
              </p>
            </div>

          </div>

        </div >

      )
      }
    </>
  );
}

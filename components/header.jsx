'use client';


import ModalSobre from "@/components/ModalSobre";
import { CircleAlert } from "Lucide-react/dist/esm/icons/circle-alert";

export default function Header({
    textoHeard = 'Gestão de Pessoas',
    textoHeard2 = 'Gestão de Pessoas',
    cor = 'bg-gray-700 ',
    funcao,
    type = '',

}) {

    return (

        <div
            type={type}
            className={`
            ${cor}
            w-full      
            h-20 
            items-center
            flex 
            p-3
            justify-between
            rounded-lg
            text-white
            font-medium
            
            `}
        >
            <div className="">
            {textoHeard}
            </div>
            {textoHeard2}

            <ModalSobre />


        </div>
    );
}
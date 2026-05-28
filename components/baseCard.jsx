export default function BaseCard({
    textoCard = 'Card',
    textoCard2 = 'Card',
    cor = 'bg-gray-300 ',
    funcao,
    type = 'button',

}) {

    return (
        <div
            type={type}
            onClick={funcao}
            className={`
            ${cor}
            w-70
            h-20 
            rounded
            flex
            justify-between
            text-black
            font-medium
            
            `}
        >
            <div className="text-lg p-1 text-gray-800 font-semibold flex">
            {textoCard}
            </div>

          <div className="text-4xl text-gray-800 font-semibold items-end flex">
            {textoCard2}
            </div>

        </div>
    );
}
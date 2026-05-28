export default function BaseBotao({
    textoBotao = 'Botão',
    cor = 'bg-blue-600 hover:bg-blue-700',
    funcao,
    type = 'button',

}) {

    return (
        <button
            type={type}
            onClick={funcao}
            className={`
            ${cor}
            w-32
            h-10 
            rounded-lg
            text-white
            font-medium
            transition-all
            duration-300
            `}
        >
            {textoBotao}

        </button>
    );
}
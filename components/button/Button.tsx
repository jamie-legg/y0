interface IButtonProps {
    text: string
    colour: 1|2|3|4|5
    click: () => void
}

export default function Button({ text, colour, click }: IButtonProps) {
    const hover = colour == 5 ? 4 : colour + 1
    return (
        <button
            type="button"
            className={`order-0 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-y-${colour} hover:bg-y-${hover} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-y-3 sm:order-1 sm:ml-3`}
        >
            {text}
        </button>
    )
}
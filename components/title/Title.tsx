interface ITitleProps {
    text: string
}

export default function Title({ text }: ITitleProps) {
    return (
        <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">{text}</h1>
    )
}
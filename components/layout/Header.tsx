import Title from "../title/Title";

interface IHeaderProps {
    title: string
}

export default function Header({ title }: IHeaderProps) {
    return(
        <div className="flex-1 min-w-0">
        <Title text={title} />
    </div>
    )
}
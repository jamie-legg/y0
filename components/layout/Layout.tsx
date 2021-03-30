import Menu from "../nav/Menu";

export default function Layout({ children, user }):JSX.Element {
    return (
        <div className="relative bg-white-5">
            <Menu user={'jamie'} />
            {children}
        </div>
    )
}
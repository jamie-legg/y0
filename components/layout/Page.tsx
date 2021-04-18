export default function Page({children}) {
    return(
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
            {children}
        </main>
            
    )
}
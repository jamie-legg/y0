interface IAvatarProps {
    activeProp: boolean,
    avatarUrl: string
}

export default function Avatar({activeProp, avatarUrl}: IAvatarProps):JSX.Element {
    return (
        <span className="ml-3 inline-block relative">
                <img className="h-12 w-12 rounded-md" src={avatarUrl} alt="" />
                <span className="absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 block border-2 border-white rounded-full">
                <span className={`block h-3 w-3 
                rounded-full ${activeProp? "bg-green" : "bg-white"}`}></span>
      </span>
    </span>
    )
}
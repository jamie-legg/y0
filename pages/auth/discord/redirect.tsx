import { useRouter } from "next/router";

export default function DiscordRedirect() {
    return(
        <div>{useRouter().asPath}</div>
    )
}
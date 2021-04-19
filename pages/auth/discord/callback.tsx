import { useRouter } from "next/router";

export default function DiscordCallback() {
    return(
        <div>{useRouter().asPath}</div>
    )
}
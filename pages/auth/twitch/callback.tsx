import { useRouter } from "next/router";

export default function TwitchCallback() {
    return(
        <div>{useRouter().asPath}</div>
    )
}
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const backendUrl = process.env.REACT_APP_BACKEND_URL;


export default function TwitchRedirect(props) {
    const router = useRouter();
    console.log(router.asPath)

  const [text, setText] = useState('Loading...');
  useEffect(() => {
    // Successfully logged with the provider
    // Now logging with strapi by using the access_token (given by the provider) in props.location.search
    fetch(`${backendUrl}/auth/twitch/callback`)
      .then(res => {
        if (res.status !== 200) {
          throw new Error(`Couldn't login to Strapi. Status: ${res.status}`);
        }
        return res;
      })
      .then(res => res.json())
      .then(res => {
        // Successfully logged with Strapi
        // Now saving the jwt to use it for future authenticated requests to Strapi
        localStorage.setItem('jwt', res.jwt);
        localStorage.setItem('username', res.user.username);
        setText('You have been successfully logged in. You will be redirected in a few seconds...');
        setTimeout(() => router.push('/'), 3000); // Redirect to homepage after 3 sec
      })
      .catch(err => {
        console.log(err);
        setText('An error occurred, please see the developer console.')
      });
  }, [history, location.search]);

  return <p>{text}</p>
}






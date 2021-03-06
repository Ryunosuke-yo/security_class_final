import {Link} from "@chakra-ui/react"

function Login() {

  const twitchUrl = `https://id.twitch.tv/oauth2/authorize?response_type=token+id_token&client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=http://localhost:3000/redirect&claims={"userinfo":{"picture":null,"email":null,"preferred_username":null}}&scope=openid`
  return (
      <Link href={twitchUrl} isExternal>
        Login with Twitch
      </Link>
  );
}

export default Login;

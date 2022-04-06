const client_id = "2b414e9d967a1c8853e1";
const redirect_uri = "http://localhost:3000/auth/github/callback";
const url = `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}`;
export default url;
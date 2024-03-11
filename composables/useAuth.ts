export const useAuth = () => {
  return {
    SignIn: (callback: string = "") => {
      var oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth";

      // Create element to open OAuth 2.0 endpoint in new window.
      var form = document.createElement("form");
      form.setAttribute("method", "GET"); // Send as a GET request.
      form.setAttribute("action", oauth2Endpoint);

      // Parameters to pass to OAuth 2.0 endpoint.
      var params = {
        client_id: "660010482532-gf5tskd4a762dv8hf44slj5n1rs0m16s.apps.googleusercontent.com",
        redirect_uri: `${process.env.ROOT_URL??"http://localhost:3000"}/${callback}`,
        scope: "openid profile email",
        state: "try_sample_request",
        include_granted_scopes: "true",
        response_type: "token",
      } as {[key: string]: string};

      // Add form parameters as hidden input values.
      for (var p in params) {
        var input = document.createElement("input");
        input.setAttribute("type", "hidden");
        input.setAttribute("name", p);
        input.setAttribute("value", params[p]);
        form.appendChild(input);
      }

      // Add form to page and submit it to open the OAuth 2.0 endpoint.
      document.body.appendChild(form);
      form.submit();
    },
    SignOut: () => {},
    SignAuthenticate: () => {},
  };
};

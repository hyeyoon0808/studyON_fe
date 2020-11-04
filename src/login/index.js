export const API_BASE_URL = "http://localhost:8080";

export const OAUTH2_REDIRECT_URI = "http://localhost:3000/oauth/redirect";

export const KAKAO_AUTH_URL =
    API_BASE_URL +
    "/oauth/authorize/kakao?redirect_uri=" +
    OAUTH2_REDIRECT_URI;

export const ACCESS_TOKEN =
    "";

export function request(options) {
    const headers = new Headers({
        "Content-Type": "application/json",
    });

    if (localStorage.getItem(ACCESS_TOKEN)) {
        headers.append(
            "Authorization",
            "Bearer " + localStorage.getItem(ACCESS_TOKEN)
        );
    }

    const defaults = { headers: headers };
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options).then((response) =>
        response.json().then((json) => {
            if (!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    );
}

export function login(loginRequest) {
    return request({
        url: API_BASE_URL + "/auth/login",
        method: "POST",
        body: JSON.stringify(loginRequest),
    });
}

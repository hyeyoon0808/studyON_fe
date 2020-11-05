export const API_BASE_URL = "https://kauth.kakao.com";
export const REST_API_KEY = "413b91f997f3bd96b32c9d2af9a11066";

export const OAUTH2_REDIRECT_URI = "http://localhost:3000/social/login/kakao";

export const KAKAO_AUTH_URL =
    API_BASE_URL +
    "/oauth/authorize?response_type=code"+
    "&client_id=" +
    REST_API_KEY +
    "&redirect_uri=" +
    OAUTH2_REDIRECT_URI;

export const ACCESS_TOKEN =
    "qx7FnRnWVZURd8D5BX3jDLFXXzdqG6prL775_gorDKgAAAF1koc8zA";

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

import axios from 'axios';

class MyPagesApi {
    URL = "/profile"

    userDetail() {
        return axios
            .get(this.URL)
            .then((response) => {
                return response.data;
            })
            .catch((error) => console.error(error));
    }
}

export default MyPagesApi;
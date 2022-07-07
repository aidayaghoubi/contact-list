const baseApi = "https://randomuser.me/";

function Api() {

  return fetch("https://randomuser.me/api/?results=100&seed=abc")
    .then((res) => res.json())
    .then((item) => item);
}
export default Api;

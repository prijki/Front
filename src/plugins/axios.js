import Vue from "vue";
import VueAxios from "vue-plugin-axios";
import axios from "axios";
import store from "@/store";


Vue.use(VueAxios, {
  axios,
  // example config for axios instance
  config: {
    // axios instance config
    baseURL: "http://localhost:8000/", // api URL
  },
  interceptors: {
    // this function shows how to add Authorization header to requests
    beforeRequest(config) {
      // your auth token
      const token = store.state.auth.user.access;
      console.log(token);
      //   const token =
      //     "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjYyNDAzOTU1LCJpYXQiOjE2NjI0MDM2NTUsImp0aSI6IjJlMzhhYzE4NjE5ODQwN2U4MjExMjBlNWRmMGY3NTYyIiwidXNlcl9pZCI6MX0.-AWVdHXVTYSTzTAVy1KGcEibWH3X65nXB2qjy_n-pPU";

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    // this function shows how to add errors from server to client app
    beforeResponseError(error) {
      const { response, message } = error;

      if (response) {
        // backend error
        // shows response error
        alert(error.response.data.message);
      } else if (message) {
        // network error
        alert(message);
      }

      // return Promise.reject(error)
    },
  },
});

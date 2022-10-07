import { Fetcher } from "./useFetch.types";

const useFetch = () => {
  const callFetch: Fetcher = (path, method) => {
    try {
      const response = fetch(path, { method });
      return response.then((res) => {
        return res.json();
      });
    } catch (e) {
      console.error("The callFetch hook failed: " + e);
    }
  };
  return { callFetch };
};

export default useFetch;

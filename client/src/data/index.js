import axios from "axios";

const data = async () => {
  axios
    .get("http://localhost:3000")
    .then((res) => res.data)
    .catch((err) => console.error(`ERROR: ${err}`));
};

export default data;

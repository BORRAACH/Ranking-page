import { Button } from "@chakra-ui/react";
import axios from "axios";
import data from "../../data/index";

const handleFetchDataPost = () => {
  axios
    .post("http://localhost:3000/", data)
    .then((res) => console.log(res))
    .catch((err) => console.err(`ERROR: ${err}`));
};

const ButtonIncludeData = () => {
  return <Button onClick={handleFetchDataPost}>Submit</Button>;
};

export default ButtonIncludeData;

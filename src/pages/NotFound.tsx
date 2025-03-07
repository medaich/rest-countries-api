import { Link } from "react-router";
import Message from "../components/Message";
import Wrapper from "../components/Wrapper";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <Wrapper className="flex items-center flex-col gap-12">
      <Message message="The page you're looking for doesn't seem to be here" />
      <Link
        to="/"
        className="flex *:block gap-2 items-center bg-white dark:bg-dark-blue px-4 py-2 justify-center rounded shadow-md"
      >
        <ArrowLeft />
        <span>Back to Homepage</span>
      </Link>
    </Wrapper>
  );
};

export default NotFound;

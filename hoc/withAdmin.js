/* eslint-disable react/display-name */
import { useRouter } from "next/router";
import { useUser } from "../context/user";

const withProtected = (Pages) => {
  return (props) => {
    const router = useRouter();
    const user = useUser();
    const { uid, role } = user;

    if (!uid || role != 1) {
      router.replace("/");
      return <></>;
    }

    return <Pages {...props} />;
  };
};

export default withProtected;

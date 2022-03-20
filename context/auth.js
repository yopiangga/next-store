import { useEffect, useState } from "react";
import { InitialUserState, useUser } from "./user";
import { Authentication } from "../services/firebase";
import { getUser } from "services/user_services";
import Image from "next/image";
import loading from "public/loading.svg";

const AuthStateChangeProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const user = useUser();
  const { SetUser } = user;

  const InitiateAuthStateChange = () => {
    Authentication().onAuthStateChanged((user) => {
      if (user) {
        // console.log("User is authenticated");
        // SetUser({
        //   email: user.email,
        //   uid: user.uid,
        // });
        getUser(user.uid)
          .then((res) => {
            SetUser({
              email: user.email,
              uid: user.uid,
              address: user.address,
              phone: user.phone,
              cart: user.cart,
              role: user.role,
            });
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        // console.log("User is not authenticated");
        SetUser(InitialUserState);
      }
      setIsLoading(false);
    });
  };

  useEffect(() => {
    InitiateAuthStateChange();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Image src={loading} />
      </div>
    );
  } else {
    return children;
  }
};

export default AuthStateChangeProvider;

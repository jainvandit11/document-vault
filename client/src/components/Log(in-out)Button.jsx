import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { IoExit } from "react-icons/io5";
export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="py-2 px-6 bg-base-primary" onClick={() => loginWithRedirect()}>Log In</button>;
};
export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className="flex gap-4 place-items-center px-6 py-1 bg-semantics-2 text-lg" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      <IoExit className="scale-150"/>
      Log Out
    </button>
  );
};
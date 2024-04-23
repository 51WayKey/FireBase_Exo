import React from "react";
import { useUserContext } from "../hooks/useUserContext";

function Account () {
  const { user, setUser } = useUserContext();
    return (
        <div>
            <h1>Account</h1>
        </div>
    )

}

export default Account

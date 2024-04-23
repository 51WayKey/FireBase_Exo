import { useContext } from "react"
import { UserContext } from "../contexts/userContext"

export const useUserContext = () => {
  const context = useContext(UserContext);

  if(!context) {
    throw Error('userContext must be used within a provider');
  }

  return context;
}

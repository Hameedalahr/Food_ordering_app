import { createContext } from "react";
import User from "../components/User";

const UserContext=createContext({
    loggedInUser:"Default User"
})

export default UserContext;
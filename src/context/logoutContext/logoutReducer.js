
import { toast } from "react-toastify";

const logoutReducer = (state, action) => {
    switch (action.type) {
        case "LOGOUT":
            {
                return (
                    toast.success("Logout Success")
                );
            }
        case "403":
            {
                return (
                    toast.error("error 403 token expired")
                );
            }

        default:
            return state;
    }
}

export default logoutReducer
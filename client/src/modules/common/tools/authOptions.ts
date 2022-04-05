import { AuthAxios } from "../../common/http";
import { authDataIntrface } from "../interfaces";




export const login = async (authData: authDataIntrface) => {
    const { data } = await AuthAxios({
        method: 'POST',
        url: `http://localhost:5810/api/login`,
        data: authData,
    });
    return data
}

export const refreshToken = async () => {
    const { data } = await AuthAxios({
        method: 'get',
        url: `http://localhost:5810/api/refresh`,
    });
    return data
}
export const logOut = (dispatch: Function) => {
    localStorage.removeItem('token')
    dispatch(changeIsAuth(false))
}

function changeIsAuth(arg0: boolean): any {
    throw new Error("Function not implemented.");
}

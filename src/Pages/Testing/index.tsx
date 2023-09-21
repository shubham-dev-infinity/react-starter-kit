import { useEffect } from "react";
import { ApiGet } from "../../HTTP/API/communicate";

function Testing() {
    const getUsers = () => {
        const resposne = ApiGet('test', '/')
        console.log(resposne)
    }
    useEffect(() => {
        getUsers();
        return () => { }
    }, [])
    return (
        <div>Testing</div>
    )
}

export default Testing
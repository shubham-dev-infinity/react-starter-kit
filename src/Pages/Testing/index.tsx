import { useEffect } from "react";
import get from "../../HTTP/API/get";

function Testing() {
    const getUsers = () => {
        const resposne = get({ endpoint: '/' })
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
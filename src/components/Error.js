import { useRouteError } from "react-router"

const Error = () => {
    const err = useRouteError();
    return (
    <div>
        <h1>Opps!! Error Occured</h1>
        <h1>{err.status}: {err.statusText}</h1>
    </div>
    )
}

export default Error;
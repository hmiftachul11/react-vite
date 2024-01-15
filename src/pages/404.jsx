import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="flex-auto flex space-x-4 justify-center min-h-screen items-center flex-col">
            <h1 className="text-3xl">Oops !</h1>
            <p className="text-xl my-5">Sorry, an expected error has been encountered.</p>
            <p>{error.statusText || error.message}</p>
        </div>
    )
}

export default ErrorPage;
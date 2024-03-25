import { useEffect, useState } from "react"

const useStatusOnline = () => {
    const [ status, setStatus] = useState(true);

    window.addEventListener("offline", () => {
        setStatus(false);
        
    });

    window.addEventListener("online", () => {
        setStatus(true);
    });
    return status
}

export default useStatusOnline;
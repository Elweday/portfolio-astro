import { useEffect, useState } from "react";

export default function Component() {
    let searchUrl: URLSearchParams;
    const [params, setParams] = useState<string[]>();

    useEffect(() => {
        const serachParams = new URLSearchParams(window.location.search);
        console.log("from react", window.location)
        setParams(serachParams.getAll("tag"))
    }, []);
    
    return (
        
        <h1>Hi from {params} react</h1>
    )
}
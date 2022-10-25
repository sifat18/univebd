const { useState, useEffect } = require("react");
// data for home slider
const useData = () => {
    const [course, setcourse] = useState([])
    useEffect(() => {
        // api.unive.com.bd
        fetch('https://api.unive.com.bd/api/courses').then(res => res.json()).then(data => setcourse(data))
    }, [])
    return [course]
}
export default useData;
const { useState, useEffect } = require("react");
// data for home slider
const useData = () => {
    const [course, setcourse] = useState([])
    useEffect(() => {
        fetch('newbooks.json').then(res => res.json()).then(data => setcourse(data))
    }, [])
    return [course]
}
export default useData;
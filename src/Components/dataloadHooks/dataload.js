const { useState, useEffect } = require("react");
// data for home slider
const useData = () => {
    const [course, setcourse] = useState([])
    useEffect(() => {
        fetch('https://fierce-woodland-01411.herokuapp.com/courses').then(res => res.json()).then(data => setcourse(data))
    }, [])
    return [course]
}
export default useData;
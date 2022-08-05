const { useState, useEffect } = require("react");
// data for home slider
const useData = () => {
    const [course, setcourse] = useState([])
    useEffect(() => {
        // fierce-woodland-01411.herokuapp.com
        fetch('https://fierce-woodland-01411.herokuapp.com/api/courses').then(res => res.json()).then(data => setcourse(data))
    }, [])
    return [course]
}
export default useData;
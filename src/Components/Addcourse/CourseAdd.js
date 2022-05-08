import { useState } from 'react';
import { Container } from 'react-bootstrap'
import Header from '../Header/Header'

export default function CourseAdd() {
    const [module, setModule] = useState([
        { module_name: '', task1: '', task2: '', task3: '', module_video: '' }
    ])
    const handleFormChange = (index, event) => {
        let data = [...module];
        data[index][event.target.name] = event.target.value;
        setModule(data)
    }
    const addFields = () => {
        let newModule = { module_name: '', task1: '', task2: '', task3: '', module_video: '' }
        setModule([...module, newModule])
    }
    const submit = (e) => {
        e.preventDefault();
        let Finalcourse = { ...course }
        Finalcourse.Module = [...module]
        setCourse(Finalcourse)
        console.log(Finalcourse)
    }
    const [course, setCourse] = useState({});
    const handleOnChangeL = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newCourse = { ...course };
        newCourse[field] = value;
        setCourse(newCourse);
        // console.log(loginData)

    }
    return (
        <>
            <Header />
            <Container>
                <form onSubmit={submit} >

                    <input
                        name='coursename'
                        placeholder='Course_Name'
                        className='d-block'
                        onChange={handleOnChangeL}
                    />
                    <textarea
                        name='about'
                        placeholder='About_course'
                        rows='5'
                        cols='80'
                        className='d-block'
                        onChange={handleOnChangeL}
                    />
                    <input
                        name='imageLink'
                        placeholder='Image_Link'
                        className='d-block'
                        onChange={handleOnChangeL} />
                    <input
                        name='demoLink'
                        placeholder='Demo_Link'
                        className='d-block'
                        onChange={handleOnChangeL} />
                    {module.map((input, index) => (
                        <div key={index}>
                            <input
                                name='module_name'
                                placeholder='Module_name'
                                value={input.module_name}
                                onChange={event => handleFormChange(index, event)} />
                            <input
                                name='module_video'
                                placeholder='Module_Video'
                                className='d-block'
                                value={input.module_video}
                                onChange={event => handleFormChange(index, event)} />
                            <input
                                name='task1'
                                placeholder='Task1'
                                value={input.task1}
                                onChange={event => handleFormChange(index, event)} />
                            <input
                                name='task2'
                                placeholder='Task2'
                                value={input.task2}
                                onChange={event => handleFormChange(index, event)} />
                            <input
                                name='task3'
                                placeholder='Task3'
                                value={input.task3}
                                onChange={event => handleFormChange(index, event)} />


                        </div>
                    ))}
                    <button onClick={submit}>Submit</button>
                </form>

                <button onClick={addFields}>Add More..</button>
            </Container>
        </>
    )
}
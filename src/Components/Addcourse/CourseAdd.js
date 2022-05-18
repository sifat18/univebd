import { useState } from 'react';
import { Container } from 'react-bootstrap'
import Header from '../Header/Header'

export default function CourseAdd() {
    const [module, setModule] = useState([
        { module_name: '', module_description: '', sub_mod1: '', sub_mod2: '', sub_mod3: '', sub_video1: '', sub_video2: '', sub_video3: '', sub_description1: '', sub_description2: '', sub_description3: '', q1: '', q2: '', q3: '', q4: '', q5: '', qA1: '', qA2: '', qA3: '', qA4: '', qA5: '' }
    ])
    const handleFormChange = (index, event) => {
        let data = [...module];
        data[index][event.target.name] = event.target.value;
        setModule(data)
    }
    const addFields = () => {
        let newModule = { module_name: '', module_description: '', sub_mod1: '', sub_mod2: '', sub_mod3: '', sub_video1: '', sub_video2: '', sub_video3: '', sub_description1: '', sub_description2: '', sub_description3: '', q1: '', q2: '', q3: '', q4: '', q5: '', qA1: '', qA2: '', qA3: '', qA4: '', qA5: '' }
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
                            <h2>module {index + 1}</h2>
                            <input
                                name='module_name'
                                placeholder='Module_name'
                                value={input.module_name}
                                onChange={event => handleFormChange(index, event)} />
                            <textarea
                                name='module_description'
                                placeholder='About_mdoule'
                                rows='5'
                                cols='80'
                                className='d-block'
                                value={input.module_description}
                                onChange={event => handleFormChange(index, event)} />
                            <h2>sub module 1</h2>
                            <div className="d-flex justify-content-around align-items-center">
                                <div>
                                    <p>sub module name</p>
                                    <input
                                        name='sub_mod1'
                                        placeholder='sub_module_name'
                                        value={input.sub_mod1}
                                        onChange={event => handleFormChange(index, event)} />
                                </div>
                                <div className='pt-5'>
                                    <p>sub module description</p>

                                    <textarea
                                        name='sub_description1'
                                        placeholder='About_submdoule'
                                        rows='3'
                                        cols='30'
                                        className=''
                                        value={input.sub_description1}
                                        onChange={event => handleFormChange(index, event)} />
                                </div> <div>
                                    <p>sub module video</p>
                                    <input
                                        name='sub_video1'
                                        placeholder='Module_Video'
                                        className=''
                                        value={input.sub_video1}
                                        onChange={event => handleFormChange(index, event)} />
                                </div></div>
                            <h2>sub_module 2</h2>
                            <div className="d-flex justify-content-around align-items-center">
                                <div>
                                    <p>sub module name</p>
                                    <input
                                        name='sub_mod2'
                                        placeholder='sub_module_name'
                                        value={input.sub_mod2}
                                        onChange={event => handleFormChange(index, event)} />
                                </div>
                                <div className='pt-5'>
                                    <p>sub module description</p>

                                    <textarea
                                        name='sub_description2'
                                        placeholder='About_submdoule'
                                        rows='3'
                                        cols='30'
                                        className=''
                                        value={input.sub_description2}
                                        onChange={event => handleFormChange(index, event)} />
                                </div> <div>
                                    <p>sub module video</p>
                                    <input
                                        name='sub_video2'
                                        placeholder='Module_Video'
                                        className=''
                                        value={input.sub_video2}
                                        onChange={event => handleFormChange(index, event)} />
                                </div></div>
                            <h2>sub_module 3</h2>
                            <div className="d-flex justify-content-around align-items-center">
                                <div>
                                    <p>sub module name</p>
                                    <input
                                        name='sub_mod3'
                                        placeholder='sub_module_name'
                                        value={input.sub_mod3}
                                        onChange={event => handleFormChange(index, event)} />
                                </div>
                                <div className='pt-5'>
                                    <p>sub module description</p>

                                    <textarea
                                        name='sub_description3'
                                        placeholder='About_submdoule'
                                        rows='3'
                                        cols='30'
                                        className=''
                                        value={input.sub_description3}
                                        onChange={event => handleFormChange(index, event)} />
                                </div> <div>
                                    <p>sub module video</p>
                                    <input
                                        name='sub_video3'
                                        placeholder='Module_Video'
                                        className=''
                                        value={input.sub_video3}
                                        onChange={event => handleFormChange(index, event)} />
                                </div></div>

                            <h2>Add Quizes</h2>
                            <div className="d-flex justify-content-around align-items-center">
                                <div>
                                    <p> Question 1</p>
                                    <input
                                        name='q1'
                                        placeholder='Question'
                                        className=''
                                        value={input.q1}
                                        onChange={event => handleFormChange(index, event)} />

                                    <p>Answer 1</p>
                                    <input
                                        name='qA1'
                                        placeholder='Answer'
                                        className=''
                                        value={input.qA1}
                                        onChange={event => handleFormChange(index, event)} />
                                </div>
                                <div>
                                    <p> Question 2</p>
                                    <input
                                        name='q2'
                                        placeholder='Question'
                                        className=''
                                        value={input.q2}
                                        onChange={event => handleFormChange(index, event)} />

                                    <p>Answer 2</p>
                                    <input
                                        name='qA2'
                                        placeholder='Answer'
                                        className=''
                                        value={input.qA2}
                                        onChange={event => handleFormChange(index, event)} />
                                </div>
                                <div>
                                    <p> Question 3 </p>
                                    <input
                                        name='q3'
                                        placeholder='Question'
                                        className=''
                                        value={input.q3}
                                        onChange={event => handleFormChange(index, event)} />

                                    <p>Answer 3</p>
                                    <input
                                        name='qA3'
                                        placeholder='Answer'
                                        className=''
                                        value={input.qA3}
                                        onChange={event => handleFormChange(index, event)} />
                                </div>
                                <div>
                                    <p>Question 4 </p>
                                    <input
                                        name='q4'
                                        placeholder='Question'
                                        className=''
                                        value={input.q4}
                                        onChange={event => handleFormChange(index, event)} />

                                    <p>Answer 4</p>
                                    <input
                                        name='qA4'
                                        placeholder='Answer'
                                        className=''
                                        value={input.qA4}
                                        onChange={event => handleFormChange(index, event)} />
                                </div>
                                <div>
                                    <p> Question 5</p>
                                    <input
                                        name='q5'
                                        placeholder='Question'
                                        className=''
                                        value={input.q5}
                                        onChange={event => handleFormChange(index, event)} />

                                    <p>Answer 5</p>
                                    <input
                                        name='qA5'
                                        placeholder='Answer'
                                        className=''
                                        value={input.qA5}
                                        onChange={event => handleFormChange(index, event)} />
                                </div>
                            </div>
                        </div>
                    ))}
                    <button onClick={submit}>Submit</button>
                </form>

                <button onClick={addFields}>Add More..</button>
            </Container>
        </>
    )
}
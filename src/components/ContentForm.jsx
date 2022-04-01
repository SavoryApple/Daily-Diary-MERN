import React, { useState } from 'react';
import axios from 'axios';
import './css/contentform.css';

// import { useHistory, Link, useParams } from 'react-router-dom';

export const ContentForm = (props) => {

    // const history = useHistory();
    // const { id } = useParams();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [reminder, setReminder] = useState('');
    // const [checkbox, setCheckbox] = useState(false);
    const [mood, setMood] = useState('');

    const [errors, setErrors] = useState([]);

    function createEntry(e) {
        e.preventDefault(e);

        const newEntry = {
            title,
            content,
            description,
            imageUrl,
            reminder,
            // checkbox,
            mood
        }
        axios.post("http://localhost:8000/api/calendar/create", newEntry)
            .then(res => {
                console.log(res.data);
                // history.push("/pirates/")
            })
            .catch(err => {
                const { errors } = err.response.data; // add .error if passing in an object with other things aside from errors
                const messages = Object.keys(errors).map(error => errors[error].message)
                console.log(messages);
                setErrors(messages);
            })
    }




    return (
        <>

            {/* <div className="container"> */}


            {/* <button><Link className="text-primary" to={"/pirates"}>CrewBoard</Link></button> */}
            <div className="container">
                <h3 className="text-center">Journal Entry - March 31</h3>
                <form className="container1" onSubmit={createEntry}>
                    {errors.map((err, index) => <p key={index}>{err}</p>)}
                    <div className="left fs-4">
                        Title:
                        <input className="form-control w-75" value={title} onChange={(e) => setTitle(e.target.value)} /><br />
                        <label htmlFor="basic-url" className="form-label w-75">Image Url:</label>
                        <div className="input-group mb-3 2-85 w-75">
                            <span className="input-group-text" ></span>
                            <input value={imageUrl} type="text" onChange={(e) => setImageUrl(e.target.value)} className="form-control" aria-describedby="basic-addon3" />
                        </div>
                        Share your thoughts:
                        <textarea className="form-control w-75" value={content} onChange={(e) => setContent(e.target.value)} /><br />
                        What did you do today?
                        <textarea className="form-control w-75" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div className="right fs-4">
                        Reminder:
                        {/* <input value={name} onChange={(e) => setName(e.target.value)} /><br/><br/> */}

                        <div className="input-group">
                            {/* <div class="input-group-text">
                                <input className="form-check-input mt-0" type="checkbox" checked={checkBox} onChange={e => setCheckBox(e.target.checked)} aria-label="Radio button for following text input"/>
                            </div> */}
                            <input type="text" value={reminder} onChange={(e) => setReminder(e.target.value)} placeholder='"eat sushi *_*"' className="form-control w-75" aria-label="Text input with radio button" />
                        </div>
                        <br />

                        Mood:
                        <select className="form-select w-75" onChange={(e) => setMood(e.target.value)} value={mood} id="inputGroupSelect04" aria-label="select">
                            <option>Happy</option>
                            <option>Sad</option>
                            <option>Angry</option>
                            <option>Sick</option>
                            <option>Tired</option>
                            <option>Excited</option>
                        </select><br />
                        {/* <h6>Come back to it later? &nbsp;          
                        <input type="checkbox" onChange={e => setCheckbox(e.target.checked)} checked={checkbox} /></h6> */}
                        {/* <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Finish wireframe' /> */}
                        <br />
                        <button className="button">Create </button>
                    </div>

                </form>

            </div>
            {/* add quotes */}
            {/* </div> */}
        </>
    )

}

export default ContentForm;



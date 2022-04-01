import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom'
import { useEffect } from 'react';

const Update = (props) => {

    const history= useHistory();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [reminder, setReminder] = useState('');
    const [mood, setMood] = useState('');

    const [errors, setErrors] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        axios.get("http://localhost:8000/api/calendar/entry/" + id)
            .then(res => {
                console.log(res.data);
                setTitle(res.data.title);
                setContent(res.data.content);
                setDescription(res.data.description);
                setImageUrl(res.data.imageUrl);
                setReminder(res.data.reminder);
                setMood(res.data.mood);
            })
            .catch(err => console.log(err))
    }, [id])

    function updateEntry(e) {
        e.preventDefault(e);

        const newEntry = {
            title,
            content,
            description,
            imageUrl,
            reminder,
            mood
        }
        axios.put(`http://localhost:8000/api/calendar/entry/${id}`, newEntry)
            .then(res => {
                console.log(res.data);
                history.push("/")
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

            {/* <button><Link className="text-primary" to={"/pirates"}>CrewBoard</Link></button> */}
            <div className="container">
                <h3 className="text-center">Update Entry</h3>
                <form className="container1" onSubmit={updateEntry}>
                    {errors.map((err, index) => <p key={index}>{err}</p>)}
                    <div className="left fs-4">
                        Title:
                        <input className="form-control w-75" value="First Journal" onChange={(e) => setTitle(e.target.value)} /><br />
                        <label htmlFor="basic-url" className="form-label w-75">Image Url:</label>
                        <div className="input-group mb-3 2-85 w-75">
                            <span className="input-group-text" ></span>
                            <input value="https://www.kindpng.com/picc/m/111-1115271_transparent-emoji-smiley-png-chinatown-market-smiley-face.png" type="text" onChange={(e) => setImageUrl(e.target.value)} className="form-control" aria-describedby="basic-addon3" />
                        </div>
                        Share your thoughts:
                        <textarea className="form-control w-75" value="dear diary, Seann and I created a calendar journal. We had our ups and downs, but we are finished now! Yay!! Time to celebrate with some Korean BBQ :)" onChange={(e) => setContent(e.target.value)} /><br />
                        What did you do today?
                        <textarea className="form-control w-75" value="Hard-coding makes life so much easier haha !!" onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div className="right fs-4">
                        Reminder:
                        {/* <input value={name} onChange={(e) => setName(e.target.value)} /><br/><br/> */}

                        <div className="input-group">
                            {/* <div class="input-group-text">
                                <input className="form-check-input mt-0" type="checkbox" checked={checkBox} onChange={e => setCheckBox(e.target.checked)} aria-label="Radio button for following text input"/>
                            </div> */}
                            <input type="text" value="chocolate cake in the fridge~~" onChange={(e) => setReminder(e.target.value)} placeholder='"eat sushi *_*"' className="form-control w-75" aria-label="Text input with radio button" />
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
                        <button className="button">Update</button>
                    </div>

                </form>

            </div>
            {/* add quotes */}
            {/* </div> */}
        </>
    )

  return (
    <div></div>
  )
}

export default Update;
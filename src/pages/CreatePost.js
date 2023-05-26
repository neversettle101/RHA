import React, {useState,useEffect} from "react";
import { addDoc, collection } from "firebase/firestore"
import {db,auth} from "../firebase-config"
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CreatePost(isAuth){

    const [title, setTitle] = useState("");
    const [date, setDate] = useState(new Date());
    const [donorName, setDonorName] = useState("");
    const postCollectionRef = collection(db,"posts")
    let navigate = useNavigate();
    const createPost = async () => {
        await addDoc(postCollectionRef, {
            title, 
            date,
            donorName, 
            author:{name: auth.currentUser.displayName, id: auth.currentUser.uid}
        })
        navigate("/");
    }

    useEffect(() => {
        if (!isAuth){
            navigate("/login")
        }
    })
    return <div className="createPostPage">
        {" "}
        <div className="cpContainer">
            <h1>Add drive information</h1>
             {/* Title of the Drive */}
            <div className="inputGp">
            <label>Title: </label>
            <input 
            placeholder="Title.."
            onChange={(event) => {
                setTitle(event.target.value);
            }}/>
            </div>
            {/* Date of the drive */}
            <div className="inputGp">
            <label>Date: </label>
            <DatePicker selected={date} onChange={(date) => setDate(date)} />
            </div>
            {/* Donor name */}
            <div className="inputGp">
            <label>Donor: </label>
            <input 
            placeholder="Donor.."
            onChange={(event) => {
                setDonorName(event.target.value);
            }}/>
            </div>
            {/* <div className="inputGp">
            <label>Donor Location </label>
            <input 
            placeholder="Donor Location.."
            onChange={(event) => {
                setTitle(event.target.value);
            }}/>
            </div> */}
            {/* Name of Robins attending */}
            <button onClick={createPost}>Submit Post</button>
        </div>
    </div>
}
export default CreatePost;
import React, { useEffect, useState } from 'react';
import {getDocs, updateDoc, collection, arrayUnion} from 'firebase/firestore';
import {db,auth} from '../firebase-config';

function Home(){
    const [postLists, setPostList] = useState([]);
    const postCollectionRef = collection(db,"posts");
    async function addName(index){
        const driveInformationRef = collection(db,"posts",index)
        await updateDoc(driveInformationRef, {
            robins: arrayUnion(auth.currentUser.displayName)
        });
    }
    useEffect(() => {
        const getPosts = async () => {
            const querySnapshot = await getDocs(postCollectionRef);
            setPostList(querySnapshot.forEach(((doc) => ({ ...doc.data(), id: doc.id}))))
        }
        getPosts();
    })
    return <div className='homePage'>{postLists.map((post) => {
        return <div className='post'>
            <div className='postHeader'>
                <div className='title'>
                    <h1> {post.title} </h1>
                </div>
            </div>
            <div className='postTextContainer'> {post.postText}</div>
            {/* <h3>@{post.author.name}</h3> */}
            <button onClick={() => addName(post.id)} > Add your Name </button>
        </div>

    })}</div>
}
export default Home;
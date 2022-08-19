import {useGetPostsQuery, useCreatePostMutation, useDeletePostMutation} from "./store/postsApi";
import {useState} from "react";

const formDefaultState = {
    title: '',
    body: '',
}

function App() {
    const [numberOfPosts, setNumberOfPosts] = useState('');
    const {data, isLoading} = useGetPostsQuery(numberOfPosts);
    const [postData, setPostData] = useState({...formDefaultState});
    const [createPost, {isLoading: isCreating}] = useCreatePostMutation();
    const [deletePost] = useDeletePostMutation();

    if(isLoading) return <h3>Loading ...</h3>;

    const updatePostData = ({target}) => {
        const updatedPostData = {...postData};
        updatedPostData[target.name] = target.value;
        setPostData(updatedPostData);
    }

    const createPostHandler = async e => {
        e.preventDefault();
        const requestData = await createPost({...postData}).unwrap();
        setPostData({...formDefaultState})

        console.log(requestData)
    }

    const removePost = id => () => deletePost(id);

    const changeNumberOfPosts = ({target}) => setNumberOfPosts(target.value);



    return (
        <div className="App">
            <h3>Create Post</h3>

            <form onSubmit={createPostHandler}>
                <fieldset disabled={isCreating}>
                    <p>
                        <input type="text" name='title' placeholder='title' onChange={updatePostData} value={postData['title']}/>
                    </p>
                    <p>
                        <input type="text" name='body' placeholder='body' onChange={updatePostData} value={postData['body']}/>
                    </p>

                    <button type="submit">Create post!</button>
                </fieldset>
            </form>

            <hr/>
            <label>
                <span>Number for posts to show: |{numberOfPosts || 'all' }| :</span>
                <input type="number" onInput={changeNumberOfPosts} value={numberOfPosts}/>
            </label>
            <ul>
                {data.map(post => (
                    <li key={post.id}>
                        {post.title}
                        <button onClick={removePost(post.id)}>delete post</button>
                    </li>
                ))}
            </ul>
        </div>
  );
}

export default App;

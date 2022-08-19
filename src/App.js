import {useGetPostsQuery, useGetPostByIdQuery} from "./store/postsApi";
import {useState} from "react";


function App() {
    const [numberOfPosts, setNumberOfPosts] = useState('');
    const {data, isLoading} = useGetPostsQuery(numberOfPosts);

    if(isLoading) return <h3>Loading ...</h3>;

    const changeNumberOfPosts = ({target}) => setNumberOfPosts(target.value);

    return (
        <div className="App">
            <label>
                <span>Number for posts to show: |{numberOfPosts || 'all' }| :</span>
                <input type="number" onInput={changeNumberOfPosts} value={numberOfPosts}/>
            </label>
            <ul>
                {data.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
  );
}

export default App;

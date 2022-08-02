import {useGetPostsQuery, useGetPostByIdQuery} from "./store/postsApi";


function App() {
    const {data, isLoading} = useGetPostsQuery()
    const {data: postData} = useGetPostByIdQuery(10)


    console.log(postData)

  return (
    <div className="App">
        {
            isLoading ?
                <h3>Loading ...</h3>
                :
                <ul>
                    {data.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
        }
    </div>
  );
}

export default App;

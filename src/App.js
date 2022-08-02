import {useGetPostsQuery, useGetPostByIdQuery, useCreatePostMutation} from "./store/postsApi";
import {useEffect} from "react";


function App() {
   const [createPost, {isLoading}] = useCreatePostMutation();

   useEffect(() => {
       setTimeout(() => {
           createPost();
       }, 100)
   }, [])


  return (
    <div className="App">
        hello world
    </div>
  );
}

export default App;

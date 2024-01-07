import Header from './Components/Header'
import Footer from './Components/Footer'
import Blogs from './Components/Blogs'
import { useContext, useEffect } from 'react'
import { AppContext } from './context/AppContext'

function App() {
  
  const{fetchBlogPosts} = useContext(AppContext);

  useEffect(()=>{
    fetchBlogPosts();
  },[]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Header/>
      <Blogs/>
      <Footer/>
    </div>
  );
}

export default App;

import React, { useContext } from 'react'
import Spinner from './Spinner';
import { AppContext } from '../context/AppContext';

const Blogs = () => {

    const { posts, loading } = useContext(AppContext);

    return (
        <div className='w-11/12 max-w-[650px] flex-col flex gap-y-10 mt-[135px] mb-[200px] justify-center items-center h-screen'>
            {
                loading ? (<Spinner />) :
                    posts.length === 0 ? (
                        <div className='flex justify-center items-center'><p className='text-2xl font-bold'>No result found</p></div>
                    ) : (
                        posts.map((post) => {
                            return (
                                <div key={post.id} >
                                    <p className='font-bold text-lg'>{post.title}</p>
                                    <p className='mt-1'>By <span className='italic'>{post.author} </span>on <span className='font-semibold'>{post.category}</span></p>
                                    <p className='mb-3 font-semibold'>Posted on <span>{post.date}</span></p>
                                    <p>{post.content}</p>
                                    <div className='flex gap-x-2'>
                                        {post.tags.map((tag, index) => {
                                            return <span key={index} className='text-blue-500 font-bold underline text-[12px] mt-2'>#w{tag}</span>
                                        })}
                                    </div>
                                </div>
                            )
                        })


                    )
            }
        </div>
    )
}

export default Blogs
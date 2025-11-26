import axios from 'axios';

export const getPosts = async (token:string) => {
  try{
    const response = await axios.get('https://tec-social-network.onrender.com/api/posts?page=1&limit=50', {
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    return response.data;
  }catch(error){
    console.error("Error: ", error)
  }
}

export const likePost = async (postId: number, token:string) => {
  try{
    const response = await axios.put('https://tec-social-network.onrender.com/api/posts/${postId}/like', {
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    return response.data
  }catch(error){
    console.error(error)
  }
}

export const unlikePost = async (postId: number, token:string) => {
  try{
    const response = await axios.delete('https://tec-social-network.onrender.com/api/posts/${postId}/like', {
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    return response.data
  }catch(error){
    console.error(error)
  }
}

export const getFollowedPosts = async (token:string) => {
  try{
    const response = await axios.get('https://tec-social-network.onrender.com/api/feed?page=1&limit=50', {
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    return response.data;
  }catch(error){
    console.error("Error: ", error)
  }
}

export const createPost = async (content: string, token:string) => {
  try{
    const response = await axios.post('https://tec-social-network.onrender.com/api/posts', {content}, 
    {
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
     return response.data;
  }catch(error){
    console.error("Error: ", error)
  }
}
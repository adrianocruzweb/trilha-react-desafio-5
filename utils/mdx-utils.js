import { api } from '../services/api'

export const getPosts = async () => {
    const {data} = await api.get('/posts'); 

    if(data){
        return data;
    }

    return []
}

export const getPostBySlug = async (id) => {

    //TODO: BUSCAR UM POST EM ESPECIFICO.
    const {data, errors} = await api.get(`/posts?id=eq.${encodeURIComponent(id)}&select=*`);


    if(data){
        return data;
    }

    return ''
}


import { api } from "./AxiosService"
import { AppState } from "../AppState"
import { logger } from "../utils/Logger"





class BlogsService {
    async getAll() {
        const res = await api.get('api/blogs')
        logger.log('[BlogService getAll]', res.data)
        AppState.blogs = res.data
    }

    async getActiveBlog(id) {
        const res = await api.get('api/blogs/' + id)
        logger.log('[Service:GetActive]', res.data)
        AppState.activeBlog = res.data
    }


}

export const blogsService = new BlogsService()
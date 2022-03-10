import { api } from "./AxiosService"
import { AppState } from "../AppState"
import { logger } from "../utils/Logger"





class BlogService {
    async getAll() {
        const res = await api.get('api/blogs')
        logger.log(res.data)
        AppState.blogs = res.data
    }
}

export const blogService = new BlogService()
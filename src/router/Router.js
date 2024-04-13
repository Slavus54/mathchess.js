import {routes} from './routes'

class Router {
    constructor() {
        this.routes = routes
    }

    init() {
        const pathname = window.location.pathname
        let result = this.routes.find(el => el.url === pathname)

        if (result !== undefined) {
            let instance = new result.instance()
            
            instance.init()
        }

    }
}

export default Router
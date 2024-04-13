import ViewConstructor from '../view/ViewConstructor'

class ComponentContainer {
    constructor(key, childs) {
        this.key = key
        this.childs = childs
    }


    render() {
        const view = new ViewConstructor(this)
        
        view.init()
    }
}

export default ComponentContainer
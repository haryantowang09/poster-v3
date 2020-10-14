import { reactive, readonly } from 'vue';
export class Store {
    constructor(storeName) {
        this.storeName = storeName;
        let data = this.data();
        this.setup(data);
        this.state = reactive(data);
    }
    setup(data) { }
    getState() {
        return readonly(this.state);
    }
}
//# sourceMappingURL=main.js.map
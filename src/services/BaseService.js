import HttpService from "./HttpService"

export default class BaseService {

    constructor () {
        this.instance = new BaseService
    }

    static request (status = { auth: false }) {
        return new HttpService(status)
    }

}
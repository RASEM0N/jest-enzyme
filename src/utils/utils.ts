import axios from 'axios'

// eslint-disable-next-line @typescript-eslint/ban-types
export const forEach = (items: Array<number>, callback: Function) => {
    for (let index = 0; index < items.length; index++) {
        callback(items[index])
    }
}

export class Users {
    static all(): Promise<any> {
        return axios.get('/users.json').then((resp) => {
            return resp.data
        })
    }
}

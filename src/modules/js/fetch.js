import axios from 'axios';

function fetch(url, data) {
    return new Promise((resolve, reject) => {
        axios.get(url, data).then(res => {
            // console.log(res);
            let status = res.data.status
            if (status == 200) {
                resolve(res)
                return
            }
            if (status == 300) {
                location.href = 'login.html'
                resolve(res)
                return
            }
            reject(res)

            // resolve(res)
        }).catch(error => reject(error))
    })
}

export default fetch

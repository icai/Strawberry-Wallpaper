import { apiTranslation } from '../api/api.js'

let type = ''

const cancelFn = {
    pexels: require('./pexels.js').cancelImage,
    '500px': require('./500px.js').cancelImage,
    paper: require('./paper.js').cancelImage,
    unsplash: require('./unsplash.js').cancelImage
}

const getUrl = {
    pexels: require('./pexels.js').getImage,
    '500px': require('./500px.js').getImage,
    paper: require('./paper.js').getImage,
    unsplash: require('./unsplash.js').getImage
}

export const getUrls = function (data) {
    return new Promise(async (resolve, reject) => {
        type = data.imageSource
        data.searchKey = await apiTranslation(data.searchKey)
        getUrl[type](data).then((urls) => {
            resolve(urls)
        }).catch((error) => {
            reject(error)
        }).finally(() => {
            type = ''
        })
    })
}

export const cancelUrls = function () {
    if (type !== '') {
        cancelFn[type]()
    }
}

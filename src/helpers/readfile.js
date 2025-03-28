const fs = require('fs')


const readFile = () => {
    // const data = fstat.readFileSync('db.json')
    //     return JSON.parse(data)

    try {
        const data = fs.readFileSync('db.json')
        return JSON.parse(data)
    } catch (error) {
        console.log('blog not found', error)
        return {
            message: 'blog not found'
        }
        // return[]
    }

}

module.exports = { readFile }
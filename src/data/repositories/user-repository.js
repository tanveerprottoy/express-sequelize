const User = require('../models/user')

class UserRepository {

    async create(name) {
        try {
            const user = User.build({ name: name })
            await user.save()
            return user
        }
        catch (e) {
            console.log(e)
            return null
        }
    }

    async update(id, name) {
        try {
            const user = User.build({ id: id })
            user.name = name
            await user.save()
            return user
        }
        catch (e) {
            console.log(e)
            return null
        }
    }

    async findAll() {
        try {
            return await User.findAll()
        }
        catch (e) {
            console.log(e)
            return null
        }
    }

    async findOne(id) {
        try {
            return await User.findOne({ id: id })
        }
        catch (e) {
            console.log(e)
            return null
        }
    }

    async delete(id) {
        try {
            const user = User.create({ id: id })
            await user.destroy()
            return user
        }
        catch (e) {
            console.log(e)
            return null
        }
    }
}

module.exports = new UserRepository;
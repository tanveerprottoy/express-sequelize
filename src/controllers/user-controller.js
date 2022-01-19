const UserRepository = require('../data/repositories/user-repository')
const ResponseUtils = require('../utils/res-utils')
const constants = require('../utils/constants')

class UserController {

    create = async (req, res) => {
        const { name } = req.body
        const data = await UserRepository.create(
            name
        )
        if(data == null) {
            return ResponseUtils.respondError(
                res,
                constants.HTTP_500,
                constants.GENERIC_ERROR
            )
        }
        return ResponseUtils.respond(
            res,
            constants.HTTP_201,
            { data: data }
        )
    }

    update = async (req, res) => {
        const { name } = req.body
        const data = await UserRepository.update(
            req.params.id,
            name
        )
        if (data == null) {
            return ResponseUtils.respondError(
                res,
                constants.HTTP_500,
                constants.GENERIC_ERROR
            )
        }
        return ResponseUtils.respond(
            res,
            constants.HTTP_200,
            { data: data }
        )
    }

    findAll = async (req, res) => {
        return await UserRepository.findAll()
    }

    findOne = async (req, res) => {
        return await UserRepository.findOne(req.params.id)
    }

    delete = async (req, res) => {
        return await UserRepository.delete(req.params.id)
    }
}

module.exports = new UserController
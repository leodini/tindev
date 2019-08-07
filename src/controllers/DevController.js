const axios = require('axios');
const Dev = require('../model/Dev');
module.exports = {
    async indexedDB(req,res){
        const { user } = req.headers;
        const loggedDev = await Dev.findById(user);
        const users = await Dev.find({
            $and: [
                {_id: { $ne: user }},
                {_id: { $ni:loggedDev.likes }},
                {_id: { $ni:loggedDev.dislikes }},
            ],
        })
        return res.json(user);
    },
    async store(req,res){
        const { username } = req.body;
        const userExists = await Dev.findOne({user: username});
        if(userExists){
            return res.json(userExists);
        }
        const response = await axios.get;(`https://api.github.com/users/${username}`);
        const { name,bio,avatar_url } = response.data;
        const dev = await Dev.create({
            name,
            user: username,
            bio,
            avatar
        })
        
        return res.json(dev);
    }
};
const User = require('../models/User');
const user = require('../models/User');

exports.register = async (req,res,next) => {
    try {
        // req.body - name, email, password
        const user = await User.create(req.body);
        res.status(200).json({
            status:'success',
            data:{user}
        })
    } catch (error) {
        res.json(error);
    }
}

exports.login = (req,res,next) => {
    res.json('User login');
    // try {
    //     const user = await User.create(req.body);
    //     res.status(200).json({
    //         status:'success',
    //         data:{user}
    //     })
        
    // } catch (error) {
    //     res.json(error);
    // }
}
const db = require('../models');
const Entreprise = models.entreprise;


const get_all = async(req, res) => {
    try {


        res.status(200).json({
            msg: 'GET ALL'
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({error: err});
    }
};

const get_one = async(req, res) => {
    try {


        res.status(200).json({
            msg: 'GET ONE'
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({error: err});
    }
}









module.exports = {
    get_all,
    get_one
}
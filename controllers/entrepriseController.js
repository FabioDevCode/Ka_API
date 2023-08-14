const models = require('../models');
const Entreprise = models.entreprise;

// GET - get_all
const get_all = async(req, res) => {
    try {
        const entreprises = await Entreprise.findAll({
            raw: true
        });

        if(!entreprises) {
            throw new Error(`Une erreur s'est produite, veuillez réessayer ultérieurement.`);
        }

        res.status(200).json(entreprises)
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
};

// GET - get_one
const get_one = async(req, res) => {
    const { id } = req.params;

    try {
        const entreprise = await Entreprise.findOne({
            raw: true,
            where: { id }
        })

        if(!entreprise) {
            throw new Error(`Une erreur s'est produite, veuillez réessayer ultérieurement.`);
        }

        res.status(200).json(entreprise);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}

// POST - search
const search = async(req, res) => {
    try {
        console.log(req.body);



        res.status(200).json({
            msg: 'POST SEARCH'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
};


module.exports = {
    get_all,
    get_one,
    search
}
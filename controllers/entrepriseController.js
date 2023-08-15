const models = require('../models');
const Entreprise = models.entreprise;

const DEFAULT_OFFSET = 0;
const DEFAULT_LIMIT = 12;

// GET - get_all
const get_all = async(req, res) => {
    const { name, offset, limit } = req.query;

    try {
        let pages = 1;

        const where = {
            raw: true,
            attributes: ['id', 'nom_raison_sociale'],
            offset: offset ? parseInt(offset) : DEFAULT_OFFSET,
            limit: limit ? parseInt(limit) : DEFAULT_LIMIT
        };

        if(name) {
            where.where = {
                nom_raison_sociale: name.trim()
            }
        }

        const entreprises = await Entreprise.findAll(where);

        if(!entreprises) {
            throw new Error(`Une erreur s'est produite, veuillez réessayer ultérieurement.`);
        }

        const count = await Entreprise.count();
        if(!name) {
            pages = Math.ceil(count / where.limit)
        }

        entreprises.map(el => {
            el.image = `http://${process.env.HOST}:${process.env.PORT}/images/building_0${Math.floor(Math.random() * (6 - 1) + 1)}.webp`;
        });

        res.status(200).json({
            ent: entreprises,
            pages: Math.ceil(count / where.limit)
        })
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

        delete entreprise.createdAt;
        delete entreprise.updatedAt;
        entreprise.image = `http://${process.env.HOST}:${process.env.PORT}/images/building_0${Math.floor(Math.random() * (6 - 1) + 1)}.webp`;

        res.status(200).json(entreprise);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}


module.exports = {
    get_all,
    get_one,
}
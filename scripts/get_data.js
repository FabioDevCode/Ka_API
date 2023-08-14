// Modifiez les 2 const ci-dessous selon vos souhaits
const ENTREPRISE_PAR_PAGE = 25; // entre 10 & 25
const NB_PAGE = 6; // entre 2 et 400

const models = require('../models');

(async() => {
    const transaction = await models.sequelize.transaction();
    const transaction2 = await models.sequelize.transaction();

    try {
        console.time('EXECUTION SCRIPT');
        let result = [];

        const promises = []

        for(let i = 1; i < NB_PAGE; i++) {
            const call = await fetch(`https://recherche-entreprises.api.gouv.fr/search?code_postal=69001&per_page=${ENTREPRISE_PAR_PAGE}&page=${i}`);
            const data = await call.json();
            data.results.map(ent => {
                const obj = {
                    nom_raison_sociale: ent.nom_raison_sociale,
                    siren: ent.siren,
                    siret: ent.siege?.siret,
                    complement_adresse: ent.siege?.complement_adresse,
                    numero_voie: ent.siege?.numero_voie,
                    type_voie: ent.siege?.type_voie,
                    libelle_voie: ent.siege?.libelle_voie,
                    code_postal: ent.siege?.code_postal,
                    libelle_commune: ent.siege?.libelle_commune,
                    latitude: ent.siege?.latitude,
                    longitude: ent.siege?.longitude
                }
                result.push(obj);
            });
        }

        for(ent of result) {
            const check_if_exist = await models.entreprise.findOne({
                where: {
                    siren: ent.siren
                }
            });

            if(check_if_exist) {
                promises.push(check_if_exist.update(ent, {transaction: transaction}));
            } else {
                promises.push(models.entreprise.create(ent, {transaction: transaction2}));
            }
        }

        await Promise.all(promises);
        await transaction.commit();
        await transaction2.commit();

        console.timeEnd('EXECUTION SCRIPT');
        process.exit(1);
    } catch (err) {
        console.error(err);
        await transaction.rollback();
        await transaction2.rollback();
        process.exit(1);
    }
})();

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('entreprise', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
        },
        nom_raison_sociale: {
            type: DataTypes.STRING,
            allowNull: false
        },
        siren: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        siret: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        complement_adresse: {
            type: DataTypes.STRING,
        },
        numero_voie: {
            type: DataTypes.STRING,
        },
        type_voie: {
            type: DataTypes.STRING,
        },
        libelle_voie: {
            type: DataTypes.STRING,
        },
        code_postal: {
            type: DataTypes.STRING,
        },
        libelle_commune: {
            type: DataTypes.STRING,
        },
        nombre_etablissements: {
            type: DataTypes.STRING,
        },
        finances_annee: {
            type: DataTypes.STRING,
        },
        finances_ca: {
            type: DataTypes.STRING,
        },
        latitude: {
            type: DataTypes.STRING,
        },
        longitude: {
            type: DataTypes.STRING,
        }
    }, {
        sequelize,
        tableName: 'entreprise'
    });
};
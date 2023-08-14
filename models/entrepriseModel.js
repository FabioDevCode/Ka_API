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
            allowNull: false
        },
        siret: {
            type: DataTypes.STRING,
            allowNull: false
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
        latitude: {
            type: DataTypes.STRING,
            allowNull: false
        },
        longitude: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        tableName: 'entreprise'
    });
};
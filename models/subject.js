module.exports = function(sequelize, DataTypes) {
    var Subject = sequelize.define("subject", {
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
          },
        subj_title:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        subj_desc: {
            type: DataTypes.STRING,
            allowNull: true,
            },
        createdAt: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updatedAt: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    });
    return Subject;
};
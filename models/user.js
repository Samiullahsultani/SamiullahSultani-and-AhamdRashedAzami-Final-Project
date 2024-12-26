const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const User = sequelize.define(
        "User",
        {
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            paranoid: true, // Soft delete
        }
    );

    User.associate = (models) => {
        // Example of a relationship with another model (e.g. posts)
        // User.hasMany(models.Post);
    };

    return User;
};

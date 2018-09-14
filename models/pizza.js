module.exports = function (sequelize, DataTypes) {
    var Pizza = sequelize.define('pizza_table', {
        pizza_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len:{
                    args:[[1,50]],
                    msg:"Improper Character Count. Please Stay Within 1-50 Characters"
                }
            }
        },
        devoured:{
            type: DataTypes.BOOLEAN,
            defualtValue: false,
        }
    },{freezeTableName: true,})
    return Pizza;
}
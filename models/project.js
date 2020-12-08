'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Project.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    category: DataTypes.STRING,
    backers: DataTypes.STRING,
    currency: DataTypes.STRING,
    state: DataTypes.STRING,
    daystogo: DataTypes.STRING,
    authorId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Project',
  });

  // Project.sync({
  //   force: true,
  // })

  return Project;
};
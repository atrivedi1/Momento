var Sequelize = require('Sequelize');
var Promise = require('bluebird');
var moments = require('../db/dbModel').Moment;

module.exports = {

  add: function (moment){
    return moments.build({
      url: moment.url,
      caption: moment.caption,
      storyid: moment.storyid
    })
    .save()
    .then(function (results){
      console.log("successfully added a moment");
      return results.dataValues;
    })
    .catch(function (error){
      console.error("you dumb: ", error);
    });
  },

  getAll: function (storyid) {
    return moments.findAll({
      where: { storyid: storyid }
      })
      .then(function (results) {
        var allMoments = results.map(function (moment) {
          return moment.dataValues;
        });

        return allMoments;
      })
      .catch(function (error) {
        console.log('Error at getting all moments: ', error);
      });
  }
};


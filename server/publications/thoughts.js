Meteor.publish("thoughts", function () {
  return Thoughts.find();
});

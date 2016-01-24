Meteor.startup(function () {
  if (Thoughts.find().count() === 0) {
    SampleData = [
      {
        created_at: new Date(),
        type: 1,
        content: "this was my first thought in milestones..."
      },
      {
        created_at: new Date(),
        type: 2,
        content: "get milk"
      },
      {
        created_at: new Date(),
        type: 3,
        content: "dinner with Ruby",
        event_time: "Wed Mar 25 2015 01:00:00 GMT-0700"
      }
    ];

    SampleData.forEach(function (data) {
      Thoughts.insert(data);
    });
  }
});

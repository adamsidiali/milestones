Thoughts = new Mongo.Collection("thoughts");

const ThoughtsSchema = new SimpleSchema({
  /**
   * Will be mapped with an enum
   * 1 = "thought"
   * 2 = "task"
   * 3 = "event"
   */
  "created_at": {
    type: Date,
    autoValue: () => {
      return new Date();
    },
    optional: false
  },
  "type": {
    type: Number,
    label: "Type",
    optional: false
  },
  "user": {
    type: String,
    optional: true // dev only
  },
  "content": {
    type: String,
    label: "Content",
    optional: false
  },
  "attachments": {
    type: String,
    optional: true
  },
  "event_time": {
    type: Date,
    optional: true
  }
});

Thoughts.attachSchema(ThoughtsSchema);

Thoughts = new Mongo.Collection("thoughts");

const ThoughtsSchema = new SimpleSchema({
  /**
   * Will be mapped with an enum
   * 1 = "thought"
   * 2 = "task"
   * 3 = "event"
   */
  "type": {
    type: Number,
    label: "Type",
    optional: false
  },
  "user": {
    type: String,
    optional: false
  },
  "content": {
    type: String,
    label: "Content",
    optional: true
  },
  "attachments": {
    type: String,
    optional: true
  },
  "event_time": {
    type: Date,
    optional: true
  },
  "created_at": {
    type: Date,
    optional: false
  }
});

Thoughts.attachSchema(ThoughtsSchema);

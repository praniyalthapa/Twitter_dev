
import mongoose from "mongoose";

const hashtagSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  tweets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tweet'
    }
  ]
}, { timestamps: true });

// Move the following lines inside the 'pre' middleware
// hashtagSchema.pre('save', function (next) {
//   this.title = this.title.toLowerCase(); // Fix: Assign the lowercase title to this.title
//   console.log(this);
//   next();
// });

const Hashtag = mongoose.model('Hashtag', hashtagSchema);
export default Hashtag;

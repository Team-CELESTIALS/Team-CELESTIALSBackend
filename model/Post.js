// server/models/Post.js
import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  image: {  // New field for image URL
    type: String,
    required: true,
  },
  link: {  // New field for external link
    type: String,
    required: true,
  },
  description: {  // New field for description
    type: String,
    required: true,
  },
  tags: [{  // New field for tags (optional)
    type: String,
  }],
});

const Post = mongoose.model('Post', postSchema);

export default Post;

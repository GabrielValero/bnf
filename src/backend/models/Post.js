import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
  title: String,
  content: String,
  time: String,
  type: String,
  imageLink: {
  	type: String,
  	require: false
  },
  author: {
  	type: String,
  	require: false
  },
  authorImage: {
  	type: String,
  	require: false
  }
})

export default mongoose.models.Post || mongoose.model('Post', PostSchema)
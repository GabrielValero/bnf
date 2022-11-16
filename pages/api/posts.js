import dbConnect from '../../src/backend/db'
import Post from '../../src/backend/models/Post'

export default async function postHandler (req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {

        const posts = await Post.find({})
        res.status(200).json({ success: true, data: posts })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        console.log(req.body)
        const post = await Post.create(req.body)
        res.status(201).json({ success: true, data: post })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
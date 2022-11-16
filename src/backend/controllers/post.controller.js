export function getPostById(id){
	try {
        const post = await Post.findById(id)
        if (!post) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: post })
      } catch (error) {
        console.log(error.message)
        res.status(400).json({ success: false })
      }

}
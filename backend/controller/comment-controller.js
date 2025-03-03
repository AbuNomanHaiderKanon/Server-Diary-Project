
import Comment from '../model/comment.js';


export const newComment = async (request, response) => {
    try {
        // Find the post by its ID
        const post = await Post.findById(request.params.id);

        if (!post) {
            return response.status(404).json({ msg: 'Post not found' });
        }

        // Append the new comment to the comments array
        await Post.findByIdAndUpdate(
            request.params.id,
            { $push: { comments: request.body.comments } }, // Use $push to append
            { new: true } // Return the updated document
        );

        response.status(200).json('Comment appended successfully');
    } catch (error) {
        response.status(500).json(error);
    }
};





export const getComments = async (request, response) => {
    try {
        const comments = await Comment.find({ postId: request.params.id });
        
        response.status(200).json(comments);
    } catch (error) {
        response.status(500).json(error)
    }
}

export const deleteComment = async (request, response) => {
    try {
        const comment = await Comment.findById(request.params.id);
        await comment.delete()

        response.status(200).json('comment deleted successfully');
    } catch (error) {
        response.status(500).json(error)
    }
}
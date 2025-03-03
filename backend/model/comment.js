import mongoose from 'mongoose';

const CommentSchema = mongoose.Schema({
    postId: {
        type: mongoose.Schema.Types.ObjectId, // Use ObjectId to reference Post
        required: true,
        ref: 'Post' // Optional: if you want to link to a Post model
    },
    comments: {
        type: String,
        required: true
    }
});

const Comment = mongoose.model('Comment', CommentSchema);

export default Comment;

const postResolvers = require('./post');
const userResolvers = require('./users');
const commentResolvers = require('./comments');

module.exports = {
    Post: {
        //modifier to add these properties
        likeCount: (parent) => parent.likes.length, //parent is the post(s) thats sent
        commentCount: (parent) => parent.comments.length
    },
    Query: {
        ...postResolvers.Query
    },
    Mutation: {
        ...userResolvers.Mutation,
        ...postResolvers.Mutation,
        ...commentResolvers.Mutation
    }
};
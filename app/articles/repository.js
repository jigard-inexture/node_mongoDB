const mongoose = require( "mongoose" );

const Article = mongoose.model( "Article" );
const User = mongoose.model( "User" );

const createArticle = async ( user, data ) => {
    const { id } = user;

    const article = new Article( data );
    article.authorId = await User.findOne( { id } );
    const query = await article.save();
    return query;
};

const findArticles = (user) => Article.find( {authorId: user._id} );

const findDetails = ( id ) => Article.findOne( { _id: id } );


module.exports = {
    createArticle,
    findArticles,
    findDetails
};

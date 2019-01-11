const mongoose = require( "mongoose" );

const User = mongoose.model( "User" );

const saveUser = ( data ) => {
    const user = new User( data );
    user.setPass( data.password );
    return user.save();
};

const editUser = ( user, data ) => {
    const { name, sex, age } = data;
    const currentUser = user;

    currentUser.name = name;
    currentUser.sex = sex;
    currentUser.age = age;
    return user.save( );
};

const deleteUser = ( user ) => user.remove();

const findUser = ( id ) => User.findOne( { id } );

const isUser = ( value ) => User.find( { "username": value } );

module.exports = {
    saveUser,
    editUser,
    deleteUser,
    findUser,
    isUser
};

"use strict"
const mongoose  = require('mongoose');
const passportLocalMongoose=require('passport-local-mongoose');
mongoose.Promise = require('bluebird');
mongoose.set('debug', true);
const Schema= mongoose.Schema;

const UserSchema =  new Schema (
//data
{
	id:{type:String},
	username:{type:String},
	password:{type: String},
}, 
//options
{
	versionKey:false,
	collection:"usersCollection"
})

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('userModel',UserSchema)
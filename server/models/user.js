const mongoose = require('mongoose');
const validator = require('validator');
const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        lowercase: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]

}, { timestamps: true });

userSchema.methods.generateAuthToken = async function () {
    try {
        const user = this;
        const token = jwt.sign({ _id: user._id.toString() }, 'thisissalt');

        user.tokens = user.tokens.concat({ token });
        await user.save();
        return token
    } catch (error) {
        throw error
    }
}

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('unable to login!');
    }

    const isMatch = await bycrypt.compare(password, user.password);

    if (!isMatch) {
        throw new Error('unablae to login!');
    }
    return user;
}

userSchema.pre('save', async function (next) {
    try {
        const user = this;
        if (user.isModified('password')) {
            user.password = await bycrypt.hash(user.password, 8);
        }
        next();
    } catch (error) {
        console.log(error)
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
import validator from 'validator';
import mongoose from 'mongoose';

const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTERNAME}.ec3xi.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`;

mongoose.connect(uri, {useNewUrlParser: true});

const messageSchema = new mongoose.Schema({
    email: String,
    name: String,
    message: String
});

const Messages = mongoose.model('messages', messageSchema);


function preHandleString(value) {
    return validator.trim(value).toLowerCase();
}

async function ContactHandler (req, res)  {

    if (req.method === 'POST') {

        let { email, name, message } = req.body;
        
        if (validator.isEmpty(email) || validator.isEmpty(name) || validator.isEmpty(message)) {
            return res.status(404).json({
                message: "Please fill the field"
            })
        }

        email = preHandleString(email);
        name = preHandleString(name);
        message = preHandleString(message);

        if (!validator.isEmail(email)) {
            return res.status(404).json({
                message: "Please fill the right email"
            })
        }

        let doc = new Messages({
            email,
            name,
            message
        });

        try {
            await doc.save();

        } catch(err) {

            return res.status(500).json({
                message: "Server has Error"
            });

        }

        res.status(200).json({
            message: "Successfully stored message",
            data: {
                email,
                name,
                message
            }
        })
    }

}

export default ContactHandler;

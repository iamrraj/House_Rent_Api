// Controller.js

//import model.js
Contact = require('../model/model');

//Handle index actions
exports.index = (req, res) =>{
    Contact.get((err, contacts) =>{
        if(err){
            res.json({
                status:"Error!! There is no api ",
                message:'Error'
            });
        }
        res.json({
            status: "success",
            message: "Real Esate Api retrieved successfully",
            results: contacts
        });
    });
};

// Handle create contact actions
exports.new = (req,res) =>{
    var contact = new Contact();
    contact.title = req.body.title ? req.body.title : contact.title;
    contact.agent = req.body.agent;
    contact.address = req.body.address;
    contact.city = req.body.city;
    contact.state = req.body.state;
    contact.zip = req.body.zip;
    contact.price = req.body.price;
    contact.bedroom = req.body.bedroom;
    contact.bathroom = req.body.bathroom;
    contact.garage = req.body.garage;
    contact.lotsize = req.body.lotsize;
    contact.pmain = req.body.pmain;
    contact.description = req.body.description;


    // save the contact and check for errors
    contact.save((err) =>{
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: 'New Data Added created!',
            results: contact
        });
    });

};

// Handle view contact info
exports.view = function (req, res) {
    Contact.findById(req.params.contact_id, function (err, contact) {
        if (err)
            res.send(err);
        res.json({
            message: 'Data details loading..',
            result: contact
        });
    });
};


// Handle update contact info
exports.update = function (req, res) {
    Contact.findById(req.params.contact_id, function (err, contact) {
            if (err)
                res.send(err);
                contact.title = req.body.title ? req.body.title : contact.title;
                contact.agent = req.body.agent;
                contact.address = req.body.address;
                contact.city = req.body.city;
                contact.state = req.body.state;
                contact.zip = req.body.zip;
                contact.price = req.body.price;
                contact.bedroom = req.body.bedroom;
                contact.bathroom = req.body.bathroom;
                contact.garage = req.body.garage;
                contact.lotsize = req.body.lotsize;
                contact.pmain = req.body.pmain;
                contact.description = req.body.description;
    // save the contact and check for errors
            contact.save(function (err) {
                if (err)
                    res.json(err);
                res.json({
                    message: 'Data  Info updated',
                    results: contact
                });
            });
        });
    };

// Handle delete contact
exports.delete = function (req, res) {
    Contact.remove({
        _id: req.params.contact_id
    }, function (err, contact) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Data  deleted'
        });
    });
};



const { Personne, Classe } = require('../models/personne.model');


module.exports = {

fetchAll: async (req, res) => {

    const personnes = await Personne.find();
    res.json(personnes);

},
create: async (req, res) => {

    const { cin, nom, prenom, age } = req.body;
    const personneExist = await Personne.findOne({ cin });
    if (personneExist){
        return res.status(400).json({Message : "Personne exist!"})
    }
    const personne = new Personne({
        cin, nom, prenom, age
    });

    await personne.save();
    res.status(200).json(personne);
},
fetchOne: async (req, res) => {

    const id = req.params.id;
    const personne = await Personne.findOne({ _id : id });
    res.json(personne);
},
updateOne: async (req, res) => {

    const id = req.params.id;
    const { cin, nom, prenom, age } = req.body;

    await Personne.findByIdAndUpdate(id, { cin, nom, prenom, age }, {$new : true});
    res.status(200).json({"message" : "User was updated successfully!"});
},
deleteOne: async (req, res) => {

    const id = req.params.id;
    await Personne.remove({"_id": id});
    res.status(200).json({"message" : "User was deleted successfully!"});
}

}
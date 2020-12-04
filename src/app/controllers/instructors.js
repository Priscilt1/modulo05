const Intl = require('intl')
const instructor = require('../models/instructor')

module.exports = {
    index(req,res) {    
            instructor.all(function(instructors){
                return res.render("instructors/index", {instructors})
            })  
    },

    create(req,res){
        return res.render ('instructors/create')
    },

    post(req,res){
        const keys = Object.keys(req.body)
        for (key of keys) {
            if (req.body[key] == "") {
                return res.send('Por favor, preencha todos os campos!')
            }
        }

        instructor.create(req.body, function(instructor){
            return res.redirect(`/instructirs/${instructors.id}`)
        })
        
    },

    show(req,res){
        return
    },

    edit(req,res){
        return
    },

    put(req,res){
        const keys = Object.keys(req.body)
        for (key of keys) {
            if (req.body[key] == "") {
                return res.send('Por favor, preencha todos os campos!')
            }
        }

        return
    },

    delete(req,res){
        return
    }
}
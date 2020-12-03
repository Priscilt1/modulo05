const { age, date } = require('../../lib/utils')
const Intl = require('intl')
const db = require('../../config/db')

module.exports = {
    index(req,res) {        
        return res.render("instructors/index")
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

        // inserindo informações na tabela no banco de dados
        const query = `
            INSERT INTO instructors (
                name, 
                avatar_url,
                gender,
                services,
                birth,
                created_at
            ) VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING id
        `

        // esse array sera responsavel por substituir os placeholder ($1, $2...)
        const values = [
            req.body.name,
            req.body.avatar_url,
            req.body.gender,
            req.body.services,
            date(req.body.birth).iso,
            date(Date.now()).iso
        ]

        db.query(query, values, function(err, results) {
            console.log(err)
            console.log(results)
            return
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
const db = require('../../config/db')
const { date } = require('../../lib/utils')

module.exports = {
    all(callback) {

        db.query(`SELECT * FROM instructors`, function (err, results){
            if(err) return res.send("Database Error!")

            callback(results.rows)
        })

    },
    create (data, callback) {
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
            data.name,
            data.avatar_url,
            data.gender,
            data.services,
            date(data.birth).iso,
            date(Date.now()).iso
        ]

        db.query(query, values, function(err, results) {
            // if(err) return res.send("Database Error!")
            callback(results.rows[0])
        })
    },
    find(id, callback, res) {
        db.query(`
            SELECT * 
            FROM instructors 
            WHERE id = $1`, [id], function(err, results) {
                if(err) return res.send("Database Error!")                
                callback(results && results.rows && results.rows[0])                
        })
    }
}

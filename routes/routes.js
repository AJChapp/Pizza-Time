
var db = require("../models");

module.exports = function (app) {
    app.get('/', function (req, res) {
        var pizzaList = {}
        db.pizza_table.findAll({
            where: { devoured: false }
        }).then(function (results) {
            pizzaList.notDevoured = results
            db.pizza_table.findAll({
                where: { devoured: true }
            }).then(function (result) {
                pizzaList.devoured = result
                res.render('index', pizzaList)
                

            })
        })
    })


    app.post('/api/new', function (req, res) {

        db.pizza_table.create({
            pizza_name: req.body.pizza_name,
            devoured: false
        }).then(function (post) {
            res.json(post)
        })
    })

    app.put('/api/update', function (req, res) {
        
        var boolean = !JSON.parse(req.body.boo)

        db.pizza_table.update(
            {devoured: boolean},
            {where:{id:req.body.id}}
        ).then(function(put){
            console.log('Update Ran')
            res.json(put)
        })
    })

    app.delete('/api/delete',function(req,res){
        db.pizza_table.destroy({
            where:{id: req.body.id}
        }).then(function(x){
            res.json(x)
        })
    })
   


};
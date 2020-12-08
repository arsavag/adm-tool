const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models')

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/static'));

// app.get('/api/projects', (req, res) => {
//     return db.Project.findAll()
//         .then((projects) => res.send(projects))
//         .catch((err) => {
//             console.log(JSON.stringify(err))
//             return res.send(err)
//         });
// });

// app.post('/api/projects', (req, res) => {
    //     db.Project.create(req.body)
    //         .then(project => {
        //             res.json(project)
        //         })
        //         .catch((err) => {
            //             console.log(JSON.stringify(err))
            //             return res.send(err)
            //         });
            // });
// app.delete('/api/projects/:id', (req, res) => {
//     const id = parseInt(req.params.id)
//     db.Project.destroy({
//         where: {id: id}
//     })
//     .then()
//     .catch((err) => {
//         console.log(JSON.stringify(err))
//         return res.send(err)
//     });
// });
app.get('/api/users', (req, res) => {
    return db.Project.findAll()
        .then((projects) => res.send(projects))
        .catch((err) => {
            console.log(JSON.stringify(err))
            return res.send(err)
        });
});
app.post('/api/users', (req, res) => {
    db.Project.create(req.body)
        .then(project => {
            res.json(project)
        })
        .catch((err) => {
            console.log(JSON.stringify(err))
            return res.send(err)
        });
});

app.delete('/api/users/:id', (req, res) => {
    const id = parseInt(req.params.id)
    db.Project.destroy({
        where: {id: id}
    })
    .then()
    .catch((err) => {
        console.log(JSON.stringify(err))
        return res.send(err)
    });
});

app.put('/api/contacts/:id', (req, res) => {
    const id = parseInt(req.params.id)
    // db.Project.update({

    // })
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});
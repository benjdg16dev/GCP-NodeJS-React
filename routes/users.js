const express = require('express');
const router = express.Router();

const users = [
    { id: 0, username: 'Bien' },
    { id: 1, username: 'Joseph' },
    { id: 3, username: 'Wong' }
];

// URL; Takes request and response parameters
router.get('/', (_, res) => {
    // res.send('Your Express App')
    res.json({ ok: true, users });
});

router.get('/users', (_, res) => {
    res.json({ ok: true, users });
})

router.get('/user/:name', (req, res) => {
    const { name } = req.params;
    const user = users.filter((x) => x.name === name)[0];
    res.json({ ok: true, user });
});

router.post('/adduser', (req, res) => {
    const { name, email } = req.body;
    if (name && email) {
        users.push({ name, email });
        res.json({ ok: true, users });
    }
});

module.exports = router
import express from 'express';
const router = express.Router();

// import Grade model
import Grade from '../models/grade';

// Add a grade
router.post('/new-grade', async(req, res) => {
    const body = req.body;
    try {
       const gradeDB = await Grade.create(body);
       res.status(200).json(gradeDB);
    } catch (error) {
        return res.status(500).json({
            message: 'An error has occurred',
            error
        })
    }
});

// Get with parameters
router.get('/grade/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const gradeDB = await Grade.findOne({ _id });
        res.json(gradeDB);
    } catch (error) {
        return res.status(400).json({
            message: 'An error has occurred',
            error
        })
    }
});

module.exports = router;
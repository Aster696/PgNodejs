require('dotenv').config();

const db = require('../db/db');

module.exports = {
    getData: async(req, res) => {
        try {
            const data = await db.query(process.env.GET_DATA);
            res.status(200).json(data);
            return;
        } catch (error) {
            console.log(error);
            return;
        }
    },
    getDataById: async(req, res) => {
        try {
            const {id} = req.params;
            const data = await db.query(process.env.GET_DATA_BY_ID, [id]);
            if(data.length === 0) throw res.status(404).send('Data not found');
            
            return res.status(200).json(data);
        } catch (error) {
            // console.log(error);
            return;
        }
    },
    postData: async(req, res) => {
        try {
            const {name, age, address, salary} = req.body;
            const data = await db.query(process.env.POST_DATA, [name, age, address, salary]);
            res.status(200).json(data);
            return;
        } catch (error) {
            console.log(error);
            return;
        }
    },
    updateData: async(req, res) => {
        try {
            const {id} = req.params;
            const {name, age, address, salary} = req.body;
            const data = await db.query(process.env.UPDATE_DATA, [name, age, address, salary, id]);
            if(data.length === 0) throw res.status(404).send('Data not found');
            // const data = await db.query("update company set name = coalesce(nullif($1 , ''), name), age = coalesce(nullif($2 , ''), age), address = coalesce(nullif($3 , ''), address), salary = coalesce(nullif($4 , ''), salary) where id = $5 returning *", 
            // [name, age, address, salary, id]);
            return res.status(200).json(data);
        } catch (error) {
            // console.log(error);
            return;
        }
    },
    deleteData: async(req, res) => {
        try {
            const {id} = req.params;
            
            const exist = await db.query(process.env.DELETE_DATA, [id]);
            if(exist.length === 0) throw res.status(404).send('Data not found');
            await db.query('delete from company where id = $1', 
            [id]);
    
            return res.status(200).send("Data deleted successfully");
        } catch (error) {
            // console.log(error);
            return;
        }
    }
}
import express from 'express';
import mysql from 'mysql';
import cors from  'cors';

const app = express();
app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "revminder"
})

app.get('/mobil', (req, res) => {
    const sql = "SELECT * FROM mobil" ;
    db.query(sql, (err, result) => {
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })  
})

app.get('/motor', (req, res) => {
    const sql = "SELECT * FROM motor" ;
    db.query(sql, (err, result) => {
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })  
})

app.post('/mobil1', (req, res) => {
    const sql = "INSERT INTO mobil (`nama_pemilik`, `no_pol`, `nama_kendaraan_mobil`, `merek`, `model`, `transmisi`, `tahun`, `warna`, `jenis`, `produk`) VALUES (?)";
    console.log(req.body)
    const values = [
        req.body.nama_pemilik,
        req.body.no_pol,
        req.body.nama_kendaraan,
        req.body.merek,
        req.body.model,
        req.body.transmisi,
        req.body.tahun,
        req.body.warna,
        req.body.jenis,
        req.body.produk,
    ]
    db.query(sql, [values], (err, result) => {
        if(err) return res.json(err);
        return res.json(result);
    })
})

app.post('/motor1', (req, res) => {
    const sql = "INSERT INTO motor (`nama_pemilik`, `no_pol`, `nama_kendaraan`, `merek`, `model`, `transmisi`, `tahun`, `warna`, `jenis`, `produk`) VALUES (?)";
    console.log(req.body)
    const values = [
        req.body.nama_pemilik,
        req.body.no_pol,
        req.body.nama_kendaraan,
        req.body.merek,
        req.body.model,
        req.body.transmisi,
        req.body.tahun,
        req.body.warna,
        req.body.jenis,
        req.body.produk,
    ]
    db.query(sql, [values], (err, result) => {
        if(err) return res.json(err);
        return res.json(result);
    })
})


app.get('/read/mobil/:id', (req, res) => {
    const sql = "SELECT * FROM mobil WHERE ID = ?";
    const id = req.params.id;

    db.query(sql,[id], (err, result)=> {
        if(err) return res.json({Message: "Error Inside Server"});
        return res.json(result);
    })
})

app.get('/read/motor/:id', (req, res) => {
    const sql = "SELECT * FROM motor WHERE ID = ?";
    const id = req.params.id;

    db.query(sql,[id], (err, result)=> {
        if(err) return res.json({Message: "Error Inside Server"});
        return res.json(result);
    })
})

app.delete('/delete/mobil/:id', (req, res) => {
    const sql = "DELETE FROM mobil WHERE ID = ?";
    const id = req.params.id;

    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ Message: "Internal Server Error" });
        }
        
        return res.status(204).send();
    });
});

app.delete('/delete/motor/:id', (req, res) => {
    const sql = "DELETE FROM motor WHERE ID = ?";
    const id = req.params.id;

    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ Message: "Internal Server Error" });
        }

        return res.status(204).send();
    });
});

app.get('/jumlahdatamobil', (req, res)=> {
    const sql = 'SELECT COUNT(*) FROM mobil';

    db.query(sql, (err, result)=> {
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
        });
});

app.get('/jumlahdatamotor', (req, res)=> {
    const sql = 'SELECT COUNT(*) FROM motor';

    db.query(sql, (err, result)=> {
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
        });
});

app.listen(8081, ()=> {
    console.log("Listening...");
})
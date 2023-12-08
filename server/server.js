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
    database: "revminder" //database
})

{/* Mengambil semua database mobil */}
app.get('/mobil', (req, res) => {
    const sql = "SELECT * FROM mobil" ;
    db.query(sql, (err, result) => {
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })  
})

{/* Mengambil semua database motor */}
app.get('/motor', (req, res) => {
    const sql = "SELECT * FROM motor" ;
    db.query(sql, (err, result) => {
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })  
})

{/* Input database mobil */}
app.post('/tambahmobil', (req, res) => {
    const sql = "INSERT INTO mobil (`nama_pemilik`, `no_pol`, `nama_kendaraan`, `merek`, `model`, `transmisi`, `tahun`, `warna`, `jenis`, `produk`) VALUES (?)";
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

{/* Input data layanan */}
app.post('/layanan', (req, res) => {
    const sql = "INSERT INTO layanan (`tanggal`,`jarak`, `biaya`, `kategori`, `dikerjakan`, `keterangan`) VALUES (?)";
    console.log(req.body)
    const values = [
        req.body.tanggal,
        req.body.jarak,
        req.body.biaya,
        req.body.kategori,
        req.body.dikerjakan,
        req.body.keterangan,
    ]
    db.query(sql, [values], (err, result) => {
        if(err) return res.json(err);
        return res.json(result);
    })
})

{/* Input data layanan berdasarkan indeks mobil tertentu*/}
app.get('/layanan/mobil/:id', (req, res) => {
    const idMobil = req.params.id;
    const sql = ` SELECT * FROM layanan`;

    db.query(sql, [idMobil], (err, result) => {
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })  
})

{/* Input data motor */}
app.post('/tambahmotor', (req, res) => {
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

{/* Mengambil data mobil dengan indeks tertentu*/}
app.get('/read/mobil/:id', (req, res) => {
    const sql = "SELECT * FROM mobil WHERE ID = ?";
    const id = req.params.id;

    db.query(sql,[id], (err, result)=> {
        if(err) return res.json({Message: "Error Inside Server"});
        return res.json(result);
    })
})

{/* Mengambil data motor dengan indeks tertentu*/}
app.get('/read/motor/:id', (req, res) => {
    const sql = "SELECT * FROM motor WHERE ID = ?";
    const id = req.params.id;

    db.query(sql,[id], (err, result)=> {
        if(err) return res.json({Message: "Error Inside Server"});
        return res.json(result);
    })
})

{/* Menghapus data mobil dengan indeks tertentu*/}
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

{/* Menghapus data mobil dengan indeks tertentu*/}
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

{/* Menghitung jumlah database didalam mobil*/}
app.get('/jumlahdatamobil', (req, res)=> {
    const sql = 'SELECT COUNT(*) FROM mobil';

    db.query(sql, (err, result)=> {
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
        });
});

{/* Menghitung jumlah database didalam mobil*/}
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
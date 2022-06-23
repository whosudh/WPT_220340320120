
const express = require('express');
const mysql = require('mysql2');
const app = express();
 const cors = require('cors');
app.use(cors());


 const bodyParser = require('body-parser');






app.use(express.static('abc'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
//whether you want nested objects support  or not
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'sudh',
	port:3306
});


app.get('/addbook', function (req, resp){
	let bookid = req.query.bookid;
	let bookname = req.query.bookname;
	let price = req.query.price;
	let op = { status: false}
	connection.query('insert into book values (?,?,?)', [bookid, bookname, price], (err, res) => {
		if (err) {
			console.log("trouble " + err);
		} else {
			output.status = true;
			console.log(res.affectedRows);
		}
		resp.send(op);
})

	
	
});

app.get('/viewall', function (req, resp){
	let bookid = req.query.bookid;
	let bookname = req.query.bookname;
	let price = req.query.price;
	let op = { status: false}
	connection.query('select * from book where bookid =?', [bookid, bookname, price], (err, res) => {
		if (err) {
			console.log("trouble " + err);
		} else {
			output.status = true;
			console.log(res[0]);
		}
		resp.send(op);
})

	
	
});




app.listen(8081, function () {
    console.log("server listening at port 8081...");
});
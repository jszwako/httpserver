var express = require('express');
const multer = require('multer');
var fs = require('fs');


var storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, '../public/uploads')
  },
  filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
});

const upload = multer({ storage: storage });

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.put('/uploads/*', function(req,res) {
  let file = (req.path).replace("/uploads/","");
  req.pipe(fs.createWriteStream(`./public/uploads/${file}`));
  req.on('end', ()=>{
    try {
      res.end()
    } catch(e){
    }
  });
})


module.exports = router;

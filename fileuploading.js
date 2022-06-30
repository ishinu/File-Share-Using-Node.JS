const http = require('http')
const formidable = require('formidable')
const file = require('fs')

http.createServer((req,res)=>{
    if(req.url == '/fileupload'){
        var form = new formidable.IncomingForm()
        form.parse(req,(err,fields,files)=>{
            var oldpath = files.filetoupload.filepath
            var newpath = '/home/shubham/Js/html/uploadeddata/' + files.filetoupload.originalFilename
            file.rename(oldpath,newpath,(err)=>{
                if(err) throw err
                res.write('File uploaded and moved')
                res.end()
            });
        });
    }
    else{
        // res.writeHead(200,{'Content-Type':'text/html'})
        // res.write('<form action="fileupload" method="post" enctype="multipart/form-data">')
        // res.write('<input type="file" name="filetoupload">')
        // res.write('<input type="submit">')
        // res.write('</form>')
        // file.readFile("we1.html","utf-8",(err,data)=>{
        //     if(err){
        //         console.log(err)
        //     }else{
        //         res.write(data)
        //         }
            
        // });
        // return res.end()

        file.readFile('index.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    }
}).listen(8080);
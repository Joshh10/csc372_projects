import http from 'http';
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 1337;
const DIST_DIR = path.join(__dirname, 'dist'); 


function serveStaticFile(res, filePath, contentType, responseCode = 200){
    fs.readFile(filePath, (error, data) => {
        if(error){
            console.error(`Error reading file: ${filePath}`, error);
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('500 - Internal Server Error');
        }else{
            res.writeHead(responseCode, {'Content-Type': contentType});
            res.end(data);
        }
    });
}

http.createServer((req, res) => {
    let filePath = req.url.replace(/\/$/, '').toLowerCase();
    if(filePath === '')filePath = '/index.html'; 

    const extname = path.extname(filePath);
    const mimeTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.gif': 'image/gif',
        '.webp': 'images/webp'
    };

    let contentType = mimeTypes[extname] || 'text/html';
    let fullPath = path.join(DIST_DIR, filePath);

   
    fs.access(fullPath, fs.constants.F_OK, (error) => {
        if(!error){
            serveStaticFile(res, fullPath, contentType);
        }else{
            serveStaticFile(res, path.join(DIST_DIR, '404.html'), 'text/html', 404);
        }
    });

}).listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}`);
});

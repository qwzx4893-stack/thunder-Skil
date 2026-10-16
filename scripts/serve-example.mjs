import {createServer} from 'node:http';
import {resolve,sep,extname} from 'node:path';
import {readFile} from 'node:fs/promises';
import {pathToFileURL} from 'node:url';
export async function serveExample(directory,port=0){
 const base=resolve(directory),types={'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.jpg':'image/jpeg','.png':'image/png','.ttf':'font/ttf','.mp4':'video/mp4','.webm':'video/webm','.vtt':'text/vtt','.md':'text/plain; charset=utf-8'};
 const server=createServer(async(req,res)=>{try{const name=decodeURIComponent(new URL(req.url,'http://localhost').pathname),file=resolve(base,'.'+(name==='/'?'/index.html':name));if(file!==base&&!file.startsWith(base+sep)){res.writeHead(403);res.end();return}const bytes=await readFile(file);res.writeHead(200,{'Content-Type':types[extname(file)]||'application/octet-stream'});res.end(bytes)}catch{res.writeHead(404);res.end('Not found')}});
 await new Promise(r=>server.listen(port,'127.0.0.1',r));return {server,url:'http://127.0.0.1:'+server.address().port};
}
if(process.argv[1]&&import.meta.url===pathToFileURL(resolve(process.argv[1])).href){const r=await serveExample(process.argv[2]||'docs/expressive/apollo',Number(process.argv[3]||8765));console.log(r.url);}

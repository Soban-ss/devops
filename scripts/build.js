const fs=require('node:fs');fs.rmSync('dist',{recursive:true,force:true});fs.mkdirSync('dist',{recursive:true});fs.cpSync('web','dist',{recursive:true});console.log('Website build successful!');

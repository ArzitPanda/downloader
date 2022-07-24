import express from "express";
import cors from 'cors';
import {YouTube,Facebook,Instagram,Twitter} from 'social-downloader-cherry';
import {downloadLink} from "./Controller/DownloadUrl.js"


const app =express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());


app.get("/",(req,res)=>{


res.send("hello this is app");


})


app.post("/",async (req,res)=>{

const {type,Link} =req.body;


console.log("entered");
console.log(Link);

if(type===1)
{
console.log("this is youtube")
const data=await YouTube.getVideo(Link);


res.send(data.data);


}
 else  if(type===2)
{

const data=await Facebook.getVideo(Link);

res.send(data.data);


}
else if(type===3)
{

const data=await Twitter.getVideo(Link);

res.send(data.data);


}
else if(type===4)
{

const data=await Instagram.getAny(Link)

res.send(data.data);


}
else
{
    res.send("not suitable");

}




});



app.listen(3001,()=>{
    console.log("app is running on port 3001")
})
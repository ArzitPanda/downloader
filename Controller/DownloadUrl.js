import {YouTube,Facebook,Instagram,Twitter} from 'social-downloader-cherry';


export const downloadLink=async (req,res)=>{

        const {type,Link} =req.body;


 if(type==1)
{
try {
        const data=await YouTube.getVideo(Link);

        res.send(data);
        
          
} catch (error) {
    res.send("try again")    ;
}


}
if(type==2)
{

const data=await Facebook.getVideo(Link);
res.send(data);


}
if(type==3)
{

const data=await Twitter.getVideo(Link);
res.send(data);


}
if(type==4)
{

const data=await Instagram.getVideo(Link);
res.send(data);


}

}






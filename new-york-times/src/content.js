import axios from 'axios';

async function getContent(){
      let res =  await axios.get('https://api.nytimes.com/svc/topstories/v2/science.json?api-key=Gwxln5M3geWlhR6UE0TY1FUWKSG3wCil')

        //fun extra asyncness to showcase loading phase
        await new Promise(res => setTimeout(res, 1000))

        return res.data
}

export default getContent

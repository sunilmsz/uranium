const axios = require('axios')

const getMeme = async (req, res) => {
   try {
        const options = {
            method: "get",
            url: "https://api.imgflip.com/get_memes"
        }
        const response = await axios(options)
        const data = response.data;
        return res.status(200).send({ data: data })
    }
    catch (error) {
        res.status(500).send({data:"internal server error ", msg:error.message})
    }
}

const getCustomMeme = async (req,res)=> {

    try {
        if(!req.body["id"]) return res.status(400).send({data:"provide mandatory fields"})
        id = req.body.id;
        box1= req.body.box1;
        box2 = req.body.box2;
        const options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?username=chewie12345&password=meme@123&template_id=${id}&text0=${box1}&text1=${box2}`,
        }
        const response = await axios(options)
        const data = response.data;
        return res.status(200).send({ data: data })
    }
    catch (error) {
        res.status(500).send({data:"internal server error ", msg:error.message})
    }

}

module.exports.getMeme = getMeme;
module.exports.getCustomMeme = getCustomMeme;

const axios = require('axios');
const res = require('express/lib/response');

const checkServerError = async (req,res,callback) => {
    try {
          await  callback();
    }
    catch(error){
        return res.status(500).send({data:"internal server error",error: error.message})
    }
}


const getStates = async (req,res) => {

    const  callback = async () => {
        const options = {
            method:"get",
            url : "https://cdn-api.co-vin.in/api/v2/admin/location/states"
        }
        const response = await axios(options)
        const data = response.data;
        res.status(200).send({data:data})
    }
    checkServerError(req,res,callback)

}

const getDistricts = async (req,res) => {

    const callback = async ()=> {
        const id = parseInt(req.params.state_id);
        console.log(id)
        if(isNaN(id)) return res.status(400).send({data:"Enter a valid state Id"})
        
        const options = {
            method:"get",
            url : "https://cdn-api.co-vin.in/api/v2/admin/location/districts/"+id
        }
        const response = await axios(options)
        const data = response.data;
        res.status(200).send({data:data})
    }

    checkServerError(req,res,callback)
}


const getByDistrictId = async (req,res)=>{

     const callback= async ()=>  {
        const id = parseInt(req.query.district_id);
        const date = req.query.date;
        if(isNaN(id) || !date) return res.status(400).send({data:"district_id & date are mandatory fields"})
        const options = {
            method:"get",
            url : "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id="+id+"&date="+date
        }
        const response = await axios(options)
        const data = response.data;
        res.status(200).send({data:data})
    }

    checkServerError(req,res,callback)

}

module.exports.getByDistrictId = getByDistrictId;
module.exports.getStates = getStates;
module.exports.getDistricts = getDistricts;
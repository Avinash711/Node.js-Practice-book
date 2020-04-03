const request = require("request");



const url = "http://www.geoplugin.net/xml.gp?103.252.27.236"

request({url: url},(error,response)=>{
    
    const xmldata = response.body
    //console.log(xmldata)
    const xmlparser =  require("xml2js").parseString;

    xmlparser(xmldata, function (err, result) {
    //console.log("the result is",result);
    for (const [key,value] of Object.entries(result['geoPlugin'])){
        console.log("Key is ==> ",key, " and value is ==>",value[0])

    }

});

})
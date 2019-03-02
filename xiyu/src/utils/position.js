const Mock = require("mockjs");
const queryString = require("querystring");
let data = Mock.mock({
    "data|300":[
        {   
            "city":"@city",
        }
    ]
})

//console.log(data)


function  position(opations){
	return  data.data
}

export default{
	position
}

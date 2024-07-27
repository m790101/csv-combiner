import { rocToAd } from "./date.js"


function filterObjectKey(endIndex, columnsName, record){
    let result = {};
    for (let i = endIndex; i < columnsName.length; i++) {
      result[columnsName[i]] = record[columnsName[i]];
    }
    return result;
}

function sortByName(data){
    let res = [];
    const map = new Map();
    data.forEach((item)=>{
        const key = item.name+item.date
        // console.log(item.name+item.date)
        if(map.has(key)){
            let singleData = map.get(key)
            singleData = {
                ...singleData,
                [item.title] : item.value
            }
            // singleData.item.title = item.value
            map.set(key, singleData);
        }
        else{
            // add new key to map
            const newData = {
                name: item.name,
                [item.title]: item.value,
                date: rocToAd(item.date)
            }
            map.set(key,newData)
        }
    })

    map.forEach((value, key)=>{
        res.push(value)
    })

    return res
}






export {
    sortByName,
    filterObjectKey
}
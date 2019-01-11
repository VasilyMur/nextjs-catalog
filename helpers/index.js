export function capetalize(str){   
    const removeHyphen = str.replace(/-/g, ' ');
    const splitToArray = removeHyphen.split(' ');
    
    return splitToArray.map(res => {
        return res.charAt(0).toUpperCase() + res.slice(1);
}).join(' ');

};
 

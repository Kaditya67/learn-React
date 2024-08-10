function detectTypes(val:number|string):string{
    if(typeof val=="string"){
        return val.toLowerCase();
    }
    return "number"
}

function provideId(id:string|null){
    if(!id){
        console.log("Id is not provided...!");
        return
    }
    id.toLowerCase()
}

// # Note : Empty string case is missing here []
function printAll(strs:string|string[]|null){
    if(strs){
        if(typeof strs=="object"){
            for(const a in strs){
                console.log(a);
            }
        }else{
            console.log(strs);
        }
    }
}


interface User{
    name:string,
    email:string
}

interface Admin{
    name:string,
    email:string,
    isAdmin:boolean
}

function isAdmin(account:User|Admin){
    // return account.isAdmin
    if("isAdmin" in account){
        return account.isAdmin
    }
}
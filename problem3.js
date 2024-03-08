console.log('=============Exercise #3 ============')
/*

    Create a Promised based function that will check a string to determine if its length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const isLong = (passed_string) => {
    return new Promise((resolve, reject) => {
        if (passed_string.length > 10) resolve(true);
        else reject(false);
    })
};

isLong('alongstringthatislong')
.then(() =>{
    console.log(`is a long word!`);
})

.catch( () => {
    console.log(`is a small word`)
})


isLong('shortword')
.then(()=>{
    console.log('another then')
})
.catch(() =>{
    console.log('I guess we gotta write these for each use?')
})
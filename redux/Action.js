export const adding = (name,surname,number) =>({
    type: 'add',
    payload : {
        mykey:mykey++,
        name: name,
        surname : surname,
        number: number,
    },
})
let mykey=0;

export const clear = () =>({
    type: 'clear',
})

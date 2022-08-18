const addToList = (obj, text) => obj.concat({
 index: obj.length,
 description: text,
 complete: false,
});

export  default addToList;
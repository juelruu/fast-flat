"use strict"
async function xxx(r = 0) {
  try {
    let data;
    if (!r) data = await Promise.reject(new Error('test error'));
    else if (r) data = await Promise.resolve(10);
    return data;
  } catch(e) {
    return await xxx(1)
  }
}


console.log(await xxx())
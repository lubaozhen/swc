let strOrBool;
if (typeof strOrBool === 'boolean' && !strOrBool || typeof strOrBool === 'string') {
    let label = typeof strOrBool === 'string' ? strOrBool : "string";
    let bool = typeof strOrBool === 'boolean' ? strOrBool : false;
    let label2 = typeof strOrBool !== 'boolean' ? strOrBool : "string";
    let bool2 = typeof strOrBool !== 'string' ? strOrBool : false;
}
if (typeof strOrBool !== 'string' && !strOrBool || typeof strOrBool !== 'boolean') {
    let label = typeof strOrBool === 'string' ? strOrBool : "string";
    let bool = typeof strOrBool === 'boolean' ? strOrBool : false;
    let label2 = typeof strOrBool !== 'boolean' ? strOrBool : "string";
    let bool2 = typeof strOrBool !== 'string' ? strOrBool : false;
}

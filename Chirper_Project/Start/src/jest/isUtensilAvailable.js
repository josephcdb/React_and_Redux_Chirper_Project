function isUtensilAvailable(utensil){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        ['fork', 'knife', 'spoon'].includes(utensil)
            ? resolve(true)
            : reject('No utensils found.')
        }, 2000);
    });
}

module.exports = isUtensilAvailable;
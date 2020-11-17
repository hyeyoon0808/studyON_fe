export default Date.prototype.yyyymmdd = function () {
    const dateObj = new Date();
    return (dateObj.getUTCFullYear()) + "-" + (dateObj.getMonth() + 1) + "-" + (dateObj.getUTCDate());
}
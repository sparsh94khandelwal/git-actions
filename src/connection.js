const sampleAction = (event) => {
    console.log('ping from sampleAction lambd', event.headers);
};

module.exports = { sampleAction };
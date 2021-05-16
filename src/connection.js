const sampleAction = (event) => {
    console.log('ping from sampleAction lambda qa', event.headers);
};

module.exports = { sampleAction };
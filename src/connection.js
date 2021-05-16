const sampleAction = (event) => {
    console.log('ping from sampleAction lambda q', event.headers);
};

module.exports = { sampleAction };
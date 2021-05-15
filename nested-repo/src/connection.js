const sampleAction = (event) => {
    console.log('ping from sampleAction lambda', event.headers);
};

module.exports = { sampleAction };
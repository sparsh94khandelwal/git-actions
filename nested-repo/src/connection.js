const sampleAction = (event) => {
    console.log('ping from sampleAction test lambda', event.headers);
};

module.exports = { sampleAction };
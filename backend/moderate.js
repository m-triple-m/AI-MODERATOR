const toxicity = require("@tensorflow-models/toxicity");

const getToxicity = (text, cb) => {
    // Load the model. Users optionally pass in a threshold and an array of
    // labels to include.
    toxicity.load(threshold).then((model) => {
      const sentences = [text];
  
      model
        .classify(sentences)
        .then((result) => {
          // console.log(result);
          cb(result);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };



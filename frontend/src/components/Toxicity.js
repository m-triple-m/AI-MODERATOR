import React, { useState, useEffect } from 'react';
// import * as tf from '@tensorflow/tfjs';
import * as toxicity from '@tensorflow-models/toxicity';

function ToxicityPrediction() {
  const [text, setText] = useState('');
  const [predictions, setPredictions] = useState([]);
  const [model, setModel] = useState(null);

  useEffect(() => {
    async function loadModel() {
      const model = await toxicity.load();
      setModel(model);
    }
    loadModel();
  }, []);

  async function predict() {
      const predictions = await model.classify(text);
      console.log(predictions);
    setPredictions(predictions);
  }

  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => predict()}>Predict</button>
      <div>
        {predictions.map((prediction) => (
          <div key={prediction.label}>{prediction.label}: {prediction.results[0].match ? 'Yes' : 'No'}</div>
        ))}
      </div>
    </div>
  );
}

export default ToxicityPrediction;

import React, { useEffect, useState } from 'react'
import * as toxicity from '@tensorflow-models/toxicity';


const ModeratorPlugin = () => {

  const [model, setModel] = useState(null);
  const [text, setText] = useState('');
  const [predictions, setPredictions] = useState(null)

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
      <div className='card'>
        <div className="card-body">
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
          <button onClick={() => predict()}>Predict</button>
          <div>
            {predictions !== null && predictions.map((prediction) => (
              <div key={prediction.label}>{prediction.label}: {prediction.results[0].match ? 'Yes' : 'No'}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModeratorPlugin

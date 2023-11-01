import React, { useEffect, useState } from 'react';
import app_config from '../../config';

const Dashboard = () => {
  const { apiUrl } = app_config;
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
  const [analysisData, setAnalysisData] = useState([]);

  const [loading, setLoading] = useState(false);

  const getAnalysisData = async () => {
    setLoading(true);
    const response = await fetch(`${apiUrl}/analysis/getbyuser/${currentUser._id}`);
    setLoading(false);
    const data = await response.json();
    console.log(data);
    setAnalysisData(data);
  };

  useEffect(() => {
    getAnalysisData();
  }, []);

  const displayAnalysisData = () => {
    if (loading) {
      return (
        <>
          <h1>Loading........</h1>
        </>
      );
    } else
      return analysisData.map((data, index) => (
        <tr>
          <td>
            <p className="fw-bold mb-1">{data.plugin}</p>
          </td>
          <td>
            <p className="fw-normal mb-1">{data.text}</p>
          </td>
          <td>
            {data.status === 'Not Toxic' ? (
              <span className="badge badge-success rounded-pill d-inline">{data.status}</span>
            ) : (
              <span className="badge badge-danger rounded-pill d-inline">{data.status}</span>
            )}
          </td>
          <td>
            <details>
              <summary>View More</summary>
              {
                data.toxicity.map((toxicity) => (
                  <div className='d-flex justify-content-between'>
                    <p className="fw-bold mb-1">{toxicity.label}</p>
                    <p className="fw-normal mb-1">{toxicity.results[0].match ? '🔴' : '🟢'}</p>
                  </div>
                ))
              }
            </details>
          </td>
        </tr>
      ));
  };

  return (
    <div style={{ minHeight: '100vh', backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <section
        className="py-5"
        style={{
          background:
            'linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898',
          backgroundBlendMode: 'multiply,multiply'
        }}
      >
        <div className="container">
          <p className="display-3 text-center fw-bold text-white">Plugin Dashboard</p>
        </div>
      </section>
      <div className="container">
        <table className="table align-middle mb-0 bg-white mt-4">
          <thead className="bg-light">
            <tr>
              <th>Plugin</th>
              <th>Text</th>
              <th>Status</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>{displayAnalysisData()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;

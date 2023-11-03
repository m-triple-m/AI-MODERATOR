import React, { useRef, useState } from 'react';
import MultipleValueTextInput from 'react-multivalue-text-input';
import { useFormik } from 'formik';
import { useUserContext } from '../../context/UserProvider';

const ExtensionGen = () => {
  const scriptData = `
  console.log('Script running in background');`;

  const titleRef = useRef(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [link, setLink] = useState('');
  const [selFile, setSelFile] = useState(null);
  const [selWords, setSelWords] = useState([]);

  const [extCount, setExtCount] = useState(1);

  const [itemsToInclude, setItemsToInclude] = useState([]);

  const { updateUser } = useUserContext();

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const [selFeatures, setSelFeatures] = useState([]);

  const featureOptions = ['Attack', 'Insult', 'Threat', 'Obscene'];

  const generateExtension = async (configOptions) => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/extension/generateandsave`, {
      method: 'POST',
      body: JSON.stringify({
        configOptions,
        filename: 'myfile',
        imagesData: ['icon_48.png', 'icon_128.png'],
        manifestData: '',
        scriptData,
        htmlData: '<h1>My Custom Extension</h1>'
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const { downloadLink } = await res.json();
    setLink(downloadLink);
    console.log(downloadLink);
    await updateUser({ numExt: currentUser.numExt + 1 }, setCurrentUser);
  };

  const extForm = useFormik({
    initialValues: {
      title: '',
      icon: '',
      features: [],
      user: currentUser._id,
      itemsToInclude
    },
    onSubmit: async (values) => {
      values.icon = selFile.name;
      values.features = selFeatures;

      console.log(values);
      generateExtension(values);
    }
  });

  const uploadFile = (e) => {
    const file = e.target.files[0];
    const fd = new FormData();
    setSelFile(file);
    fd.append('myfile', file);
    fetch(`${process.env.REACT_APP_API_URL}/util/uploadfile`, {
      method: 'POST',
      body: fd
    }).then((res) => {
      if (res.status === 200) {
        console.log('file uploaded');
      }
    });
  };

  return (
    <section className="h-100 form mb-1  " style={{ backgroundImage: 'url("/new4.jpg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <div className="container py-5">
        <div className="card w-75 mx-auto">
          <div className="card-body">
            <div className="container h-100">
              {/* <title>Form Example</title> */}
              {/* Bootstrap CSS */}
              <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
              <div className="container my-3">
                <h1 className="text-center">Generate Your Extension</h1>
                <form onSubmit={extForm.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="textInput">Text Field</label>
                    <input type="text" className="form-control" id="title" value={extForm.values.title} onChange={extForm.handleChange} placeholder="Enter text" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="imageInput">Image Field</label>
                    <input type="file" className="form-control-file" onChange={uploadFile} />
                  </div>
                  <h5>Features:</h5>
                  <div className="form-group">
                    {featureOptions.map((feature, index) => (
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          checked={selFeatures.includes(feature)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelFeatures([...selFeatures, feature]);
                            } else {
                              setSelFeatures(selFeatures.filter((f) => f !== feature));
                            }
                          }}
                        />
                        <label className="form-check-label">{feature}</label>
                      </div>
                    ))}
                  </div>

                  <MultipleValueTextInput
                    onItemAdded={(item, allItems) => setItemsToInclude(allItems)}
                    onItemDeleted={(item, allItems) => setItemsToInclude(allItems)}
                    label="Items"
                    name="item-input"
                    placeholder="Enter whatever items you want; separate them with COMMA or ENTER."
                  />
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                  {/* <button type='button' className='btn btn-primary' onClick={generateExtension} >Generate</button> */}

                  {link ? (
                    <a
                      className="btn btn-success"
                      href={link}
                      onClick={() => {
                        setExtCount(extCount + 1);
                        console.log(extCount);
                      }}
                    >
                      Download
                    </a>
                  ) : (
                    ''
                  )}
                </form>
              </div>
              {/* Bootstrap JS */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtensionGen;

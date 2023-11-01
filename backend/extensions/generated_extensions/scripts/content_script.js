console.log("working fine");
        const threshold = 0.9;
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
        
        const handleElementModerate = (element) => {
          getToxicity(element.innerHTML, (result) => {
            // console.log(result);
            const isToxic = result.filter((obj) => obj.results[0].match);
            // console.log(isToxic);
            if (isToxic.length > 0) {
              element.innerHTML = '*'.repeat(element.innerHTML.length)
              // element.style.backgroundColor = "red";
            }
          });
        }
        
        const liList = document.body.querySelectorAll("li");
        
        // Wait for the page to load
        window.addEventListener('load', () => {
          // Hide the page content
          const pageContent = document.querySelector('#page-content');
          pageContent.style.display = 'none';
        
          // Add an event listener to wait for the operation to be done
          const button = document.querySelector('#operation-button');
          button.addEventListener('click', () => {
            // Show the page content
            pageContent.style.display = 'block';
          });
        });
        
        const predictions = [];
        for (let li of liList) {
          handleElementModerate(li);
        }
        
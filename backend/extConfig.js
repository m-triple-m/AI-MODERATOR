const ext_config = {
  manifest: (name, description, icon48, icon128, permissions) => ({
    manifest_version: 3,
    name,
    description,
    action: {
      default_icon: `assets/${icon48}`,
    },
    icons: {
      48: `assets/${icon48}`,
      128: `assets/${icon128}`,
    },
    version: "1.0",
    "content_scripts": [{
      "matches": [
        "http://*/*",
        "https://*/*"
      ],
      "js": [
        "scripts/content_script.js"
      ]
    }],
    permissions,
  }),
  scripts: [
    {
      filename: "content_script.js",
      content: (
        code
      ) => `console.log("working fine");
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
        `,
    },
  ],
  html: [
    {
      filename: "new_tab.html",
      content: (body) => `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <!-- Font Awesome -->
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
    rel="stylesheet"
  />
  <!-- Google Fonts -->
  <link
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    rel="stylesheet"
  />
  <!-- MDB -->
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.2.0/mdb.min.css"
    rel="stylesheet"
  />
      <title>Custom Extension Tab</title>
  </head>
  <body>
      ${body}
      <!-- MDB -->
  <script
    type="text/javascript"
    src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.2.0/mdb.min.js"
  ></script>
  </body>
  </html>`,
    },
  ],
};

module.exports = ext_config;


import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { toast } from "react-hot-toast";

const CommentPlugin = ({ userid }) => {
  const [commentList, setCommentList] = useState([]);

  const [loading, setLoading] = useState(false);

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("user")));

  const saveAnalysis = async (values) => {
    const res = await fetch("http://localhost:5000/analysis/add", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(res.status);

    if (res.status === 200) {
      toast.success("Analysis Saved");
    }
  };

  const fetchComments = async () => {
    const res = await fetch("http://localhost:5000/comment/getall");
    const data = await res.json();
    // console.log(data);
    setCommentList(data);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const displayComments = () => {
    return commentList.map((comment) => (
      <div className="comment">
        <div className="comment-body">
          <div className="comment-info">
            <span className="comment-author">{comment.name}</span>
            <br />
            <span className="comment-date">
              {new Date(comment.createdAt).toLocaleDateString()}
            </span>
          </div>
          <div className="comment-text">{comment.comment}</div>
        </div>
      </div>
    ));
  };

  const getToxicity = (text, cb) => {
    const threshold = 0.9;
    // Load the model. Users optionally pass in a threshold and an array of
    // labels to include.
    window.toxicity.load(threshold).then((model) => {
      const sentences = [text];

      model
        .classify(sentences)
        .then(async (result) => {
          // console.log(result);
          await cb(result);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  const commentForm = useFormik({
    initialValues: {
      name: "",
      comment: "",
      user: userid,
      createdAt: new Date(),
    },
    onSubmit: async (values, { setSubmitting }) => {
      // console.log(values);
      setLoading(true);
      // console.log("Submitting");
      // return;
      getToxicity(values.comment, async (result) => {
        console.log(result);
        const isToxic = result.filter((obj) => obj.results[0].match);
        // console.log(isToxic);
        let status = "Not Toxic";
        if (isToxic.length > 0) {
          Swal.fire({
            title: "Oops",
            icon: "error",
            text: "Your comment is toxic",
          });
          status = "Toxic";
        } else {
          const res = await fetch("http://localhost:5000/comment/add", {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
              "Content-Type": "application/json",
            },
          });

          // console.log(res.status);

          if (res.status === 200) {
            Swal.fire({
              title: "Well Done",
              icon: "success",
              text: "Thank You for your comment",
            });
            fetchComments();
          }
        }
        // console.log("Done");
        setLoading(false);
        await saveAnalysis({
          text: values.comment,
          toxicity: result,
          plugin: "Comment",
          user: userid ? userid : currentUser._id,
          status,
          createdAt: new Date(),
        });
      });
    },
  });

  return (
    <div className="">
      <section className=" pt-3" style={{ backgroundImage: 'url("/new4.jpg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    .comment {\n      margin-bottom: 20px;\n    }\n    .comment .comment-body {\n      background-color: #f7f7f7;\n      padding: 10px;\n      border-radius: 5px;\n    }\n    .comment .comment-info {\n      margin-bottom: 5px;\n    }\n    .comment .comment-info .comment-author {\n      font-weight: bold;\n    }\n    .comment .comment-info .comment-date {\n      color: #777;\n      font-size: 12px;\n    }\n    .comment .comment-text {\n      margin-top: 10px;\n    }\n  ",
          }}
        />
        <div className="container py-5">
          {/* <h1 className="text-center">Comment System</h1> */}
          {displayComments()}
          {/* Add Comment Form */}
          <div className="card shadow">
            <div className="card-body">
              <div className="comment">
                <h4>Add a Comment</h4>
                <form onSubmit={commentForm.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="nameInput">Name</label>
                    <input
                      type="text"
                      className="form-control mb-3"
                      id="name"
                      value={commentForm.values.name}
                      onChange={commentForm.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="commentInput">Comment</label>
                    <textarea
                      className="form-control mb-3"
                      id="comment"
                      value={commentForm.values.comment}
                      onChange={commentForm.handleChange}
                      rows={3}
                    />
                  </div>
                  <button disabled={loading} type="submit" className="btn btn-primary mt-4">
                    {loading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Loading...</span>
                      </>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>





        </div>
        {/* Bootstrap JS */}
      </section>
    </div>
  );
};

export default CommentPlugin;

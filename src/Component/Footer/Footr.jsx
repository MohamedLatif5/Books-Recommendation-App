import React from "react";
import "./foot.css";

export default function Footr() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
              <h2 className="footer-heading">
                <span className="logo"> Online Library</span>
              </h2>
              <p>
                Explore a vast collection of books across various genres that
                cater to all interests. Our library is dedicated to providing
                readers with access to a wide range of literature, from fiction
                and non-fiction to academic resources.
              </p>
              <button
                type="button"
                className="btn btn-link p-0 text-start text-decoration-underline"
                onClick={() => alert("More info coming soon!")}
              >
                Read more{" "}
                <span
                  className="fa fa-chevron-right"
                  style={{ fontSize: "11px" }}
                />
              </button>
            </div>
            <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
              <h2 className="footer-heading">Services</h2>
              <ul className="list-unstyled">
                <li>
                  <button
                    type="button"
                    className="btn btn-link p-0 py-1 text-start"
                  >
                    Online Access
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="btn btn-link p-0 py-1 text-start"
                  >
                    Reading Recommendations
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="btn btn-link p-0 py-1 text-start"
                  >
                    Community Engagement
                  </button>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
              <h2 className="footer-heading">Tag cloud</h2>
              <div className="tagcloud row">
                <button
                  type="button"
                  className="btn btn-link tag-cloud-link col-6 p-1"
                >
                  Books
                </button>
                <button
                  type="button"
                  className="btn btn-link tag-cloud-link col-6 p-1"
                >
                  Literature
                </button>
                <button
                  type="button"
                  className="btn btn-link tag-cloud-link col-6 p-1"
                >
                  Stories
                </button>
                <button
                  type="button"
                  className="btn btn-link tag-cloud-link col-6 p-1"
                >
                  Knowledge
                </button>
                <button
                  type="button"
                  className="btn btn-link tag-cloud-link col-6 p-1"
                >
                  Learning
                </button>
                <button
                  type="button"
                  className="btn btn-link tag-cloud-link col-6 p-1"
                >
                  Resources
                </button>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
              <h2 className="footer-heading ">Subcribe</h2>
              <form action="#" className="subscribe-form">
                <div className="form-group d-flex">
                  <input
                    type="text"
                    className="form-control rounded-left"
                    placeholder="Enter email address"
                  />
                  <button
                    type="submit"
                    className="form-control  submit rounded-right"
                  >
                    submit
                  </button>
                </div>
              </form>
              <h2 className="footer-heading mt-5">Follow us</h2>
              <ul className="ftco-footer-social p-0">
                <li className="ftco-animate">
                  <button
                    type="button"
                    className="btn btn-link p-2"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Twitter"
                  >
                    <span className="fa fa-twitter" />
                  </button>
                </li>
                <li className="ftco-animate">
                  <button
                    type="button"
                    className="btn btn-link p-2"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Facebook"
                  >
                    <span className="fa fa-facebook" />
                  </button>
                </li>
                <li className="ftco-animate">
                  <button
                    type="button"
                    className="btn btn-link p-2"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Instagram"
                  >
                    <span className="fa fa-instagram" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

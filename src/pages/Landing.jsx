export default function Landing() {
  return (
    <div id="body">
      <div className="landing">
        <div className="landing-slider">
          <div className="landing-item">
            <h4 className="fw-bold px-4 pb-0 pt-5 mb-0 text-center text-primary">
              Find the right trusted caregiver for your family
            </h4>
            <img src="img/landing-1.svg" alt="logo" className="img-fluid" />
          </div>
          <div className="landing-item">
            <h4 className="fw-bold px-4 pb-0 pt-5 mb-0 text-center text-primary">
              Share your needs by creating a job post
            </h4>
            <img src="img/landing-2.svg" alt="logo" className="img-fluid" />
          </div>
          <div className="landing-item">
            <h4 className="fw-bold px-4 pb-0 pt-5 mb-0 text-center text-primary">
              Make fast and easy payment throught the app
            </h4>
            <img src="img/landing-3.svg" alt="logo" className="img-fluid" />
          </div>
        </div>
      </div>

      <div className="footer fixed-bottom p-3">
        <div className="d-flex gap-3 mb-3">
          <a href="log-in.html" className="btn btn-outline-primary btn-lg col">
            Log In
          </a>
          <a href="step-1.html" className="btn btn-primary btn-lg col">
            Sign Up
          </a>
        </div>
        <p className="text-muted text-center m-0">
          Find a care job. <a href="#">Get here</a>
        </p>
      </div>
    </div>
  );
}

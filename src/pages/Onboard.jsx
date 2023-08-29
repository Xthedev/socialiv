export default function Onboard() {
  return (
    <div id="body">
      <div className="index bg-primary d-flex align-items-center justify-content-center vh-100">
        <div className="text-center p-3">
          <div className="mb-5 pb-5">
            <a href="landing.html" className="gap-2 text-white text-center">
              <div className="mb-4">
                <img
                  src="img/logo.svg"
                  alt="logo"
                  className="img-fluid logo-img border shadow rounded-pill bg-white p-2"
                />
              </div>
              <h2 className="mb-0">Halping</h2>
            </a>
          </div>
        </div>
      </div>
      <div className="footer fixed-bottom p-4">
        <a
          href="landing.html"
          className="btn btn-light text-primary shadow btn-lg w-100"
        >
          Click Here
        </a>
      </div>
    </div>
  );
}

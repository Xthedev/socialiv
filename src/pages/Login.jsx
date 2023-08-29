export default function Login() {
  return (
    <div id="body">
      <div className="log-in p-4">
        <div className="d-flex align-items-start justify-content-between mb-4">
          <div>
            <h2 className="fw-bold text-primary">
              Welcome
              <br /> back, Guy!
            </h2>
          </div>
        </div>
        <form>
          <div className="mb-4">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label text-muted mb-0 small"
            >
              Email
            </label>
            <input
              type="email"
              className="form-control bg-transparent rounded-0 border-0 border-bottom px-0"
              id="exampleInputEmail1"
              value="singh@gmail.com"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label text-muted mb-0 small"
            >
              Password
            </label>
            <input
              type="password"
              className="form-control bg-transparent rounded-0 border-0 border-bottom px-0"
              id="exampleInputPassword1"
              value="singh1234"
            />
          </div>
          <div className="text-end mb-4">
            <a
              href="forget-password.html"
              className="text-decoration-underline text-muted small"
            >
              Forget Password?
            </a>
          </div>
          <a href="home.html" className="btn btn-primary btn-lg w-100">
            Log In
          </a>
        </form>
      </div>

      <div className="footer fixed-bottom p-4">
        <div className="text-muted text-center py-3">- OR LOGIN WITH -</div>
        <div className="d-grid gap-3 mb-3">
          <a
            href="home.html"
            className="btn btn-outline-primary btn-lg d-flex align-items-center justify-content-between"
          >
            <i className="bx bxl-facebook-circle bx-sm"></i> Login with Facebook
            <span></span>
          </a>
          <a
            href="home.html"
            className="btn btn-outline-primary btn-lg d-flex align-items-center justify-content-between"
          >
            <i className="bx bxl-twitter bx-sm"></i> Login with Twitter
            <span></span>
          </a>
        </div>
        <p className="text-muted text-center m-0">
          Don't have an account? <a href="step-1.html">Sign up</a>
        </p>
      </div>
    </div>
  );
}

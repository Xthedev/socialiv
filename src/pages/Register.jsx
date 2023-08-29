export default function Register() {
  return (
    <div id="body">
      <div className="step-3">
        <div className="step-3-navbar bg-primary d-flex align-items-center justify-content-between p-3 osahan-header">
          <a href="step-2.html" className="text-white d-flex pe-3">
            <i className="bx bx-arrow-back bx-sm"></i>
          </a>
          <h6 className="fw-bold text-white mb-0 me-auto"></h6>
          <a className="toggle d-flex align-items-center" href="#">
            <i className="bx bx-menu bx-sm text-white"></i>
          </a>
        </div>
        <div className="px-3 py-4 bg-primary">
          <p className="text-warning mb-1">Step 3 to 3</p>
          <h4 className="fw-bold text-white mb-1">Your Information</h4>
          <small className="text-white-50">
            Create a free account to see caregivers who meet you needs.
          </small>
        </div>

        <div className="m-3">
          <form>
            <div className="mb-3">
              <label
                htmlFor="exampleInputName1"
                className="form-label text-muted mb-0 small"
              >
                Full Name
              </label>
              <input
                type="text"
                className="form-control bg-transparent rounded-0 border-0 border-bottom px-0"
                id="exampleInputName1"
                value="Singh"
                aria-describedby="nameHelp"
              />
            </div>
            <div className="mb-3">
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
            <div className="mb-3">
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
          </form>
        </div>

        <div className="footer fixed-bottom p-3">
          <a href="welcome.html" className="btn btn-primary btn-lg w-100 mb-3">
            Sign Up
          </a>
          <p className="text-muted text-center m-0 small">
            By signing up. you agree to Halping's
            <br />
            <a href="#">Term of Service</a> and <a href="#">Privacy Policy</a>
          </p>
        </div>
      </div>

      <nav id="main-nav">
        <ul className="second-nav">
          <li>
            <a href="index.html">
              <i className="bx bxs-mobile me-2"></i>Splash
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-log-in me-2"></i>Authentication
            </a>
            <ul>
              <li>
                <a href="log-in.html">Log in</a>
              </li>
              <li>
                <a href="forget-password.html">Forget Password</a>
              </li>
              <li>
                <a href="recovery-password.html">Recovery Password</a>
              </li>
              <li>
                {" "}
                <a href="congrats.html">Account Setup</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i className="bx bxs-log-in-circle me-2"></i>Sign Up
            </a>
            <ul>
              <li>
                {" "}
                <a href="step-1.html">Step 1</a>
              </li>
              <li>
                <a href="step-2.html">Step 2</a>
              </li>
              <li>
                <a href="step-3.html">Step 3</a>
              </li>
              <li>
                <a href="welcome.html">Welcome</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="home.html">
              <i className="bx bxs-home me-2"></i>Homepage
            </a>
          </li>
          <li>
            <a href="find.html">
              <i className="bx bx-search me-2"></i>Find
            </a>
          </li>
          <li>
            <a href="messages.html">
              <i className="bx bxs-message-dots me-2"></i>Messages
            </a>
          </li>
          <li>
            <a href="requests.html">
              <i className="bx bxs-calendar-check me-2"></i>Requests
            </a>
          </li>
          <li>
            <a href="more.html">
              <i className="bx bxs-grid-alt me-2"></i>More
            </a>
          </li>
          <li>
            <a href="landing.html">
              <i className="bx bxs-paper-plane me-2"></i>Landing
            </a>
          </li>
          <li>
            <a href="my-favorites.html">
              <i className="bx bxs-heart me-2"></i>My Favorites
            </a>
          </li>
          <li>
            <a href="notification.html">
              <i className="bx bxs-bell me-2"></i> Notification
            </a>
          </li>
          <li>
            <a href="map.html">
              <i className="bx bxs-map-alt me-2"></i>map
            </a>
          </li>
          <li>
            <a href="chat.html">
              <i className="bx bxs-chat me-2"></i>Chat
            </a>
          </li>
          <li>
            <a href="video-call.html">
              <i className="bx bxs-video me-2"></i>Video Call
            </a>
          </li>
          <li>
            <a href="interview-in-past.html">
              <i className="bx bxs-file me-2"></i>Interview In Past
            </a>
          </li>
          <li>
            <a href="my-child.html">
              <i className="bx bx-child me-2"></i>My Child
            </a>
          </li>
          <li>
            <a href="add-child.html">
              <i className="bx bxs-baby-carriage me-2"></i>Add Child
            </a>
          </li>
          <li>
            <a href="empty-card.html">
              <i className="bx bxs-card me-2"></i>Empty Card
            </a>
          </li>
          <li>
            <a href="select-card.html">
              <i className="bx bxs-credit-card me-2"></i>Select Card
            </a>
          </li>
          <li>
            <a href="confirm-hours.html">
              <i className="bx bxs-timer me-2"></i>Confirmed Hours
            </a>
          </li>
          <li>
            <a href="payment-successful.html">
              <i className="bx bxs-check-circle me-2"></i>Payment Successful
            </a>
          </li>
          <li>
            <a href="review.html">
              <i className="bx bxs-star me-2"></i>Review
            </a>
          </li>
          <li>
            <a href="review-booking.html">
              <i className="bx bxs-receipt me-2"></i>Review Booking
            </a>
          </li>
          <li>
            <a href="request-sent.html">
              <i className="bx bxs-send me-2"></i>Request Sent
            </a>
          </li>
          <li>
            <a href="profiles.html">
              <i className="bx bxs-user me-2"></i>My Profile
            </a>
          </li>
          <li>
            <a href="my-credit.html">
              <i className="bx bx-rupee me-2"></i>My Credit
            </a>
          </li>
          <li>
            <a href="friend-credit.html">
              <i className="bx bxs-user-plus me-2"></i>Friend Credit
            </a>
          </li>
          <li>
            <a href="my-post.html">
              <i className="bx bxs-user-account me-2"></i>My Post
            </a>
          </li>
          <li>
            <a href="profile-post.html">
              <i className="bx bxs-user-rectangle me-2"></i>Profile Post
            </a>
          </li>
          <li>
            <a href="edit-post.html">
              <i className="bx bxs-message-alt-edit me-2"></i>Edit Post
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bxs-help-circle me-2"></i>Request Unconfirmed
            </a>
            <ul>
              <li>
                <a href="request-details-unconfirmed.html">
                  Request Unconfirmed 1
                </a>
              </li>
              <li>
                <a href="request-details-unconfirmed-2.html">
                  Request Unconfirmed 2
                </a>
              </li>
              <li>
                <a href="request-details-unconfirmed-3.html">
                  Request Unconfirmed 3
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i className="bx bxs-check-circle me-2"></i>Request Accepted
            </a>
            <ul>
              <li>
                <a href="request-details-accepted.html">Request Accepted 1</a>
              </li>
              <li>
                <a href="request-details-accepted-2.html">Request Accepted 2</a>
              </li>
              <li>
                <a href="request-details-accepted-3.html">Request Accepted 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i className="bx bxs-check-shield me-2"></i>Request Complete
            </a>
            <ul>
              <li>
                <a href="request-details-complete.html">Request Complete 1</a>
              </li>
              <li>
                <a href="request-details-complete-2.html">Request Complete 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="request-details-declined.html">
              <i className="bx bxs-x-circle me-2"></i>Request Declined
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bxs-file-plus me-2"></i>Booking Steps
            </a>
            <ul>
              <li>
                {" "}
                <a href="booking-step-1.html">Booking Step 1</a>
              </li>
              <li>
                <a href="booking-step-2.html">Booking Step 2</a>
              </li>
              <li>
                <a href="booking-step-3.html">Booking Step 3</a>
              </li>
              <li>
                <a href="booking-step-3.2.html">Booking Step 3.2</a>
              </li>
              <li>
                <a href="booking-step-4.html">Booking Step 4</a>
              </li>
              <li>
                <a href="booking-step-5.html">Booking Step 5</a>
              </li>
              <li>
                <a href="booking-step-6.html">Booking Step 6</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i className="bx bxs-user-badge me-2"></i>Interview Steps
            </a>
            <ul>
              <li>
                {" "}
                <a href="interview-step-1.html">Interview Step 1</a>
              </li>
              <li>
                <a href="interview-step-2.html">Interview Step 2</a>
              </li>
              <li>
                <a href="interview-step-3.html">Interview Step 3</a>
              </li>
              <li>
                <a href="interview-step-4.html">Interview Step 4</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i className="bx bxs-user me-2"></i>Profile Steps
            </a>
            <ul>
              <li>
                {" "}
                <a href="profile-step-1.html">Profile Step 1</a>
              </li>
              <li>
                <a href="profile-step-2.html">Profile Step 2</a>
              </li>
              <li>
                <a href="profile-step-3.html">Profile Step 3</a>
              </li>
              <li>
                <a href="profile-step-4.html">Profile Step 4</a>
              </li>
              <li>
                <a href="profile-step-5.html">Profile Step 5</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="profile.html">
              <i className="bx bxs-user-circle me-2"></i>Profile
            </a>
          </li>
        </ul>
        <ul className="bottom-nav">
          <li className="home">
            <a href="home.html">
              <p className="h5 m-0">
                <i className="bx bxs-home"></i>
              </p>
              Home
            </a>
          </li>
          <li className="find">
            <a href="find.html">
              <p className="h5 m-0">
                <i className="bx bx-search"></i>
              </p>
              Find
            </a>
          </li>
          <li className="more">
            <a href="more.html">
              <p className="h5 m-0">
                <i className="bx bxs-grid-alt"></i>
              </p>
              More
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

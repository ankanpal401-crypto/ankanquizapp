import Sidebar from "../components/Sidebar";

function Profile() {
  const user = localStorage.getItem("studentName") || "Student";
  const studentCode = localStorage.getItem("studentCode") || "";

  return (
    <div className="dashboard-layout">

      <Sidebar />

      <main className="dashboard-main">

        <h1>My Profile</h1>

        <div className="profile-card">

          <div className="large-avatar">
            👤
          </div>

          <h2>{user}</h2>

          <p>Student Code: {studentCode}</p>

          <p>QuizMaster Student</p>

          <div className="profile-stats">

            <div>
              <strong>0</strong>
              <span>Quizzes</span>
            </div>

            <div>
              <strong>0%</strong>
              <span>Average</span>
            </div>

            <div>
              <strong>0</strong>
              <span>Streak</span>
            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Profile;
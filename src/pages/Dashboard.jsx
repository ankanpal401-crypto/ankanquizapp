import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import CategoryCard from "../components/CategoryCard";

function Dashboard() {
  const user = localStorage.getItem("studentName") || "Student";
  const studentCode = localStorage.getItem("studentCode") || "";

  return (
    <div className="dashboard-layout">

      <Sidebar />

      <main className="dashboard-main">

        {/* Header */}
        <div className="dashboard-header">

          <div>
            <p>Welcome back 👋</p>

            <h1>{user}</h1>

            <span className="student-code">
              Student Code: {studentCode}
            </span>
          </div>

          <div className="profile-circle">
            👤
          </div>

        </div>


        {/* Hero Section */}
        <section className="hero-card">

          <div>
            <p>Your Learning Journey</p>

            <h2>
              Challenge Yourself,
              <br />
              Improve Your Knowledge!
            </h2>

            <button
              onClick={() => {
                window.location.href = "/categories";
              }}
            >
              Explore Quizzes
            </button>
          </div>

          <div className="hero-icon">
            🧠
          </div>

        </section>


        {/* Statistics */}
        <h2 className="section-title">
          Your Statistics
        </h2>

        <div className="stats-grid">

          <StatCard
            icon="🎯"
            title="Quizzes Completed"
            value="0"
          />

          <StatCard
            icon="⭐"
            title="Average Score"
            value="0%"
          />

          <StatCard
            icon="🏆"
            title="Best Score"
            value="0%"
          />

          <StatCard
            icon="🔥"
            title="Current Streak"
            value="0 Days"
          />

        </div>


        {/* Categories */}
        <h2 className="section-title">
          Popular Categories
        </h2>

        <div className="category-grid">

          <CategoryCard
            icon="💻"
            title="Programming"
            count="5"
          />

          <CategoryCard
            icon="🌎"
            title="General Knowledge"
            count="3"
          />

          <CategoryCard
            icon="🔬"
            title="Science"
            count="3"
          />

          <CategoryCard
            icon="📜"
            title="History"
            count="1"
          />

        </div>

      </main>

    </div>
  );
}

export default Dashboard;
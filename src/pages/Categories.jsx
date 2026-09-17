import Sidebar from "../components/Sidebar";
import CategoryCard from "../components/CategoryCard";

function Categories() {

  return (
    <div className="dashboard-layout">

      <Sidebar />

      <main className="dashboard-main">

        <h1>Quiz Categories</h1>

        <p className="page-description">
          Choose a category and test your knowledge.
        </p>

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

          <CategoryCard
            icon="🖥️"
            title="Computer"
            count="2"
          />

          <CategoryCard
            icon="➗"
            title="Mathematics"
            count="1"
          />

        </div>

      </main>

    </div>
  );
}

export default Categories;
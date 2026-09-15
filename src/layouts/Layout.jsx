import Sidebar from "./Sidebar";
import Header from "./Header";
import "../css/Dashboard.css";
import "../css/Sidebar.css";

function Layout({ children }) {
  return (
    <div className="dashboard-container">
      <Sidebar />

      <div className="main-content">
        <Header />
        <div className="page-content">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
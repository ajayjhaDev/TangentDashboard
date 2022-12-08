import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import SidebarMenu from "./components/SiderbarMenu";

function App() {
  return (
    <>
      <main className="row m-3">
        <section
          style={{
            height: "520px",
            backgroundColor: "#FFFFFF",
            borderRadius: "20px",
          }}
          className="col-md-2  sidebar"
        >
          <SidebarMenu />
        </section>

        <section
          style={{
            height: "220px",
          }}
          className="col-md-10 ho"
        >
          <Header />
          <Outlet />
        </section>
      </main>
    </>
  );
}

export default App;

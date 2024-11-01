import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "../style/PageNotFound.css";

function PageNotFound() {
  return (
    <>
      <Navbar />
      <div className="wrapper page">
        <h3>Oooppss...!</h3>
        <p>Halaman yang anda tuju tidak ditemukan</p>
      </div>
      <Footer />
    </>
  );
}

export default PageNotFound;

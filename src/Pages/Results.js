import RNavbar from "../Components/RNavbar";
import { useState, useEffect } from "react";
import ResultsContent from "../Components/ResultsContent";
import RFooter from "../Components/RFooter";
import Pagination from "../Components/Pagination";
import RNavbarFixed from "../Components/RNavbarFixed";

const Results = ({ srch, setSrch }) => {
  const [openSug, setOpenSug] = useState(false);
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [scroll, setScroll] = useState(0);
  const [sidebar, setSidebar] = useState(false);
  useEffect(() => {
    document.title = `${srch} - Google Search`;
  }, [srch]);
  const handleScroll = () => {
    const position = window.scrollY;
    setScroll(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      onClick={(e) => {
        console.log(e.target.className);
        if (e.target.className !== "input-srch results-input")
          setOpenSug(false);
        if (e.target.className.baseVal !== "menu-icon") setOpen(false);
      }}
    >
      <RNavbarFixed
        scroll={scroll}
        srch={srch}
        setSrch={setSrch}
        openSug={openSug}
        setOpenSug={setOpenSug}
      />
      <RNavbar
        srch={srch}
        setSrch={setSrch}
        openSug={openSug}
        setOpenSug={setOpenSug}
        open={open}
        setOpen={setOpen}
        sidebar={sidebar}
        setSideBar={setSidebar}
      />
      <ResultsContent srch={srch} setSrch={setSrch} page={page} />
      <Pagination page={page} setPage={setPage} />
      <RFooter />
    </div>
  );
};

export default Results;

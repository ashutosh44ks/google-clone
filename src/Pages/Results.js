import RNavbar from "../Components/RNavbar";
import { useState } from "react";
import ResultsContent from "../Components/ResultsContent";
import RFooter from "../Components/RFooter";
import Pagination from "../Components/Pagination";
const Results = ({ srch, setSrch }) => {
  const [openSug, setOpenSug] = useState(false);
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  return (
    <div
      onClick={(e) => {
        console.log(e.target.className);
        if (e.target.className !== "input-srch results-input")
          setOpenSug(false);
        if (e.target.className.baseVal !== "menu-icon") setOpen(false);
      }}
    >
      <RNavbar
        srch={srch}
        setSrch={setSrch}
        openSug={openSug}
        setOpenSug={setOpenSug}
        open={open}
        setOpen={setOpen}
      />
      <ResultsContent srch={srch} page={page} />
      <Pagination page={page} setPage={setPage} />
      <RFooter />
    </div>
  );
};

export default Results;

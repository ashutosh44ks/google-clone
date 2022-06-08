import RNavbar from "../Components/RNavbar";
import { useState } from "react";
import ResultsContent from "../Components/ResultsContent";
const Results = ({ srch, setSrch }) => {
  const [openSug, setOpenSug] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={(e) => {
        console.log(e.target.className);
        if (e.target.className !== "input-srch results-input") setOpenSug(false);
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
      <ResultsContent srch={srch} />
    </div>
  );
};

export default Results;

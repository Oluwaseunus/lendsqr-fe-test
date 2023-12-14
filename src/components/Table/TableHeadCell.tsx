import Image from "next/image";
import filterResults from "@/assets/images/filterResults.svg";
import { useState } from "react";
import FilterForm from "../FilterForm";

interface TableHeadCellProps {
  text: string;
}

function TableHeadCell({ text }: TableHeadCellProps) {
  const [showFilterForm, setShowFilterForm] = useState(false);

  return (
    <td>
      <div
        onClick={() => {
          setShowFilterForm(!showFilterForm);
        }}
      >
        <span>{text}</span>
        <Image src={filterResults} alt="filter" width={16} />
      </div>

      {showFilterForm && (
        <FilterForm handleClickAway={() => setShowFilterForm(false)} />
      )}
    </td>
  );
}

export default TableHeadCell;

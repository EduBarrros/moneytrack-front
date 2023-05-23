import React from "react";
import ResumeItem from "../ResumeItem";
import ResumeItemGreen from "../ResumeItemGreen";
import * as C from "./style";
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
} from "react-icons/fa";

const Resume = ({ income, expense, total, empty}: { income: any, expense: any, total: any, empty: boolean }) => {
    return (
      <C.Container>
        <ResumeItem
          title="Entradas"
          Icon={FaRegArrowAltCircleUp}
          value={income}
          iconColor={"#00B37E"}
          empty={empty}
        />
        <ResumeItem
          title="Saídas"
          Icon={FaRegArrowAltCircleDown}
          value={expense}
          iconColor={"#F75A68"}
          empty={empty}
        />
        <ResumeItemGreen
          title="Total" 
          Icon={FaDollarSign} 
          value={empty ? 0 : total} 
          iconColor={"#fff"}
          total={total}
          empty={empty}
        />
          
      </C.Container>
    );
  };

export default Resume;
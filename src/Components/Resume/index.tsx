import React from "react";
import ResumeItem from "../ResumeItem";
import ResumeItemGreen from "../ResumeItemGreen";
import * as C from "./style";
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
} from "react-icons/fa";

const Resume = ({ income, expense, total }: { income: any, expense: any, total: any }) => {
    return (
      <C.Container>
        <ResumeItem
          title="Entradas"
          Icon={FaRegArrowAltCircleUp}
          value={income}
          iconColor={"#00B37E"}
        />
        <ResumeItem
          title="Saídas"
          Icon={FaRegArrowAltCircleDown}
          value={expense}
          iconColor={"#F75A68"}
        />
        <ResumeItemGreen
          title="Total" 
          Icon={FaDollarSign} 
          value={total} 
          iconColor={"#fff"}
          total={total}
        />
          
      </C.Container>
    );
  };

export default Resume;
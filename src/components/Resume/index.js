import React from "react";
import ResumeItem from "../ResumeItem";
import * as C from "./styles";
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
} from "react-icons/fa";

const Resume = ({ income, expense, total }) => {
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
        <ResumeItem 
          title="Total" 
          Icon={FaDollarSign} 
          value={total} 
          iconColor={"#fff"}
        />
          
      </C.Container>
    );
  };

export default Resume;
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CurrencyFormatter } from "../../../services/formatters";
import {
  ContentStreaming,
  DivInputs,
  ImgStream,
  InfoStream,
  Plans,
  TitleStream,
} from "./style";

function CardStreamings({ type, listStream }) {
  const [showPlans, setShowPlans] = useState(false);
  const { name, image, plans, profiles } = listStream;
  switch (type) {
    case "Plans":
      return (
        <ContentStreaming>
          <div className="mainStream">
            <InfoStream>
              <TitleStream>
                <ImgStream src={image} alt={name} />
                <h3>{name}</h3>
              </TitleStream>
              <span className="spanStream">
                {plans.length} Planos disponíveis
              </span>
            </InfoStream>
            <button onClick={() => setShowPlans(!showPlans)}>
              <IoIosArrowDown size={30} />
            </button>
          </div>
          {showPlans && (
            <Plans isOpen={showPlans}>
              <div>
                <span className="spanStream">
                  {profiles} perfis disponíveis
                </span>
                <div className="sla">
                  {plans.map((item) => (
                    <DivInputs>
                      <div className="divRadio">
                        <input
                          className="radioInput"
                          name="plan"
                          type="radio"
                          id={item.name}
                        />
                        <label htmlFor={item.name}>
                          {item.name} - {item.screens} Telas ={" "}
                          {CurrencyFormatter.format(item.price)}
                        </label>
                      </div>
                    </DivInputs>
                  ))}
                </div>
              </div>
            </Plans>
          )}
        </ContentStreaming>
      );
  }
}
export default CardStreamings;

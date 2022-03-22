import { useContext, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { UserContext } from "../../../providers/User";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

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
  const { streamSelection } = useContext(UserContext);
  const planSelection = (ev) => {
    [listStream].map((list) => streamSelection([list, { ID: ev.target.id }]));
  };

  switch (type) {
    case "Plans":
      return (
        <ContentStreaming plansOpen={showPlans}>
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
              {showPlans ? (
                <IoIosArrowUp size={30} />
              ) : (
                <IoIosArrowDown size={30} />
              )}
            </button>
          </div>
          {showPlans && (
            <Plans isOpen={showPlans}>
              <div className="sla">
                <span className="spanStream">
                  {profiles} perfis disponíveis
                </span>
                <div>
                  {plans.map((item) => (
                    <DivInputs key={item.name}>
                      <div className="divRadio">
                        <input
                          className="radioInput"
                          name="plan"
                          type="radio"
                          id={item.name}
                          onChange={planSelection}
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
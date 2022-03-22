import { useContext, useState } from "react";
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
        <ContentStreaming plansOpen={!!showPlans}>
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

          <Plans plansOpen={showPlans}>
            <span className="spanStream">
              <strong>{profiles}</strong> perfis disponíveis
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
                      {item.name} - <strong>{item.screens} Telas</strong> (
                      {CurrencyFormatter.format(item.price)})
                    </label>
                  </div>
                </DivInputs>
              ))}
            </div>
          </Plans>
        </ContentStreaming>
      );
  }
}
export default CardStreamings;

import { Container, ContentContainer, BodySection } from "./styles";

import { GrClose } from "react-icons/gr";
import { MdContentCopy } from "react-icons/md";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

import { CurrencyFormatter } from "../../services/formatters";
import { toast } from "react-toastify";
import { useState } from "react";
import useUser from "../../providers/User";

export default function SubscriptionPopup({
  groupData,
  handlePopup,
  popupOpen,
  popupIsOpen,
}) {
  const price = CurrencyFormatter.format(groupData.streaming.plan.price);
  const pricePerMember = CurrencyFormatter.format(
    groupData.streaming.plan.price / groupData.members.length
  );

  const [passwordVisible, setPasswordVisible] = useState(false);
  const {
    user: { id },
  } = useUser();
  const havePermissionToView = groupData.owner === id || groupData.members.find((member) => member.userId === id).status === "paid";

  const handleCopy = (event) => {
    const copyText = event.currentTarget.parentNode.querySelector("input");

    copyText.select();
    copyText.setSelectionRange(0, copyText.value.length);

    navigator.clipboard.writeText(copyText.value);

    copyText.blur();
    window.getSelection().removeAllRanges();

    toast.info("Conteúdo copiado para a área de transferência");
  };

  const handlePassword = () => {
    if (havePermissionToView) {
      setPasswordVisible(!passwordVisible);
    }
  };

  return (
    <Container
      popupOpen={popupOpen}
      popupIsOpen={popupIsOpen}
      onClick={handlePopup}
    >
      <ContentContainer popupOpen={popupOpen} popupIsOpen={popupIsOpen}>
        <section className="header">
          <h3>Informações da assinatura</h3>
          <button className="close-button" onClick={handlePopup}>
            <GrClose />
          </button>
        </section>
        <section className="body">
          <BodySection>
            <div className="section-item-1">
              <p>Valor da assinatura</p>
              <span>{price}</span>
            </div>

            <div className="section-item-1">
              <p>Valor por pessoa</p>
              <span className="highlight">{pricePerMember}</span>
            </div>
          </BodySection>

          <BodySection>
            <div className="section-item-2">
              <p>Chave PIX</p>
              <div>
                <input
                  type="text"
                  className="highlight"
                  value={groupData.pix_key}
                  readOnly
                />

                {!!groupData.pix_key && (
                  <button className="copy-button" onClick={handleCopy}>
                    <MdContentCopy />
                  </button>
                )}
              </div>
            </div>

            <div className="section-item-1">
              <p>Dia de pagamento</p>
              <span className="highlight">Dia {groupData.pay_day}</span>
            </div>
          </BodySection>

          <BodySection>
            <div className="section-item-2">
              <p>Email da conta</p>
              <div>
                <input
                  type="text"
                  className="highlight"
                  value={
                    havePermissionToView ? groupData.account_email : "********"
                  }
                  readOnly
                />

                {havePermissionToView && (
                  <button className="copy-button" onClick={handleCopy}>
                    <MdContentCopy />
                  </button>
                )}
              </div>
            </div>

            <div className="section-item-3">
              <p>Senha da conta</p>
              <div>
                <div>
                  <div className="password-area">
                    <input
                      className="highlight"
                      value={
                        havePermissionToView
                          ? groupData.account_password
                          : "********"
                      }
                      type={
                        passwordVisible || !groupData.account_password
                          ? "text"
                          : "password"
                      }
                      readOnly
                    />

                    {havePermissionToView && (
                      <button
                        className="password-visibility"
                        onClick={handlePassword}
                      >
                        {passwordVisible ? (
                          <AiFillEyeInvisible />
                        ) : (
                          <AiFillEye />
                        )}
                      </button>
                    )}
                  </div>
                  {havePermissionToView && (
                    <button className="copy-button" onClick={handleCopy}>
                      <MdContentCopy />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </BodySection>
        </section>
      </ContentContainer>
    </Container>
  );
}

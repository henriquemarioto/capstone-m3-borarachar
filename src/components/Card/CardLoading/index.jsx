import { Container, ContentInfo, InfoMembers, InfoTitle } from "./styles";

export default function CardLoading({ type = "myGroups" }) {
  return (
    <Container>
      {type !== "members" ? (
        <ContentInfo>
          <InfoTitle>
            <div className="img"></div>
            <div className="h3"></div>
          </InfoTitle>
          {type === "myGroups" ? (
            <InfoMembers>
              <div className="span"></div>
              <div className="members">
                <div className="img" />
                <div className="img" />
                <div className="img" />
                <div className="img" />
                <div className="img" />
              </div>
            </InfoMembers>
          ) : (
            <InfoMembers>
              <div className="places">
                <div className="span"></div>
                <div className="strong"></div>
              </div>
              <div className="places">
                <div className="span"></div>
                <div className="strong"></div>
              </div>
            </InfoMembers>
          )}
        </ContentInfo>
      ) : (
        <ContentInfo>
          <InfoTitle>
            <div className="img round"></div>
            <div className="h3 short"></div>
          </InfoTitle>
          <InfoMembers>
            <div className="span small"></div>
            <div className="members">
              <div className="img square" />
              <div className="img square" />
              <div className="img square" />
            </div>
          </InfoMembers>
        </ContentInfo>
      )}
    </Container>
  );
}

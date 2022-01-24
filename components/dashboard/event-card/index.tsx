import * as S from "./styles";
import { Link } from "components/links";
import { getResizedImgUrl } from "lib/utils";
import { PortalEvent, PortalProject } from "lib/portal-types";
import strings from "content/strings.json";
import { Route } from "lib/routing";
import DateTime from "components/datetime";

interface Props {
  event: PortalEvent;
  project: PortalProject;
  past?: boolean;
}

const EventCard: React.FC<Props> = ({ event, project, past = false }) => {
  const coverUrl = event.coverImageUrl || project.coverImageUrl;
  const CardElem = past ? S.FadedCard : S.Card;
  return (
    <CardElem>
      <S.Header>
        {past && (<S.Note>Proběhlo</S.Note>)}
        <S.Cover
          url={getResizedImgUrl(coverUrl, 372)}
          aria-label={`${strings.cards.project.coverAriaLabel} ${event.name}`}
        />
        <S.CoverWrap />
        <S.Logo
          url={project.logoUrl}
          aria-label={`${strings.cards.project.logoAriaLabel} ${event.name}`}
        />
      </S.Header>
      <S.Content>
        <S.ShortInfoBubbles>
          <S.ShortInfoBubble>
            <DateTime date={new Date(event.startTime)} style="date-and-time" />
          </S.ShortInfoBubble>
          {event.locationTitle && (
            <S.ShortInfoBubble title={event.locationTitle}>
              {event.locationTitle}
            </S.ShortInfoBubble>
          )}
        </S.ShortInfoBubbles>
        <S.Title>{event.name}</S.Title>
        <S.Description>{event.summary}</S.Description>
        <Link to={Route.toEvent(event)}>{strings.components.cards.eventCard.detail}</Link>
      </S.Content>
    </CardElem>
  );
};

export default EventCard;

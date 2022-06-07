import { boolean, record, string } from "typescript-json-decoder";
import slack from "slack";

/** Send direct message to user with given Slack ID */
export async function sendDirectMessage(
  token: string,
  user: string,
  text: string
) {
  const decodeResponse = record({
    ok: boolean,
    channel: record({
      id: string,
    }),
  });
  const channel = await slack.conversations
    .open({ token, users: user })
    .then(decodeResponse)
    .then((response) => response.channel.id);
  await slack.chat.postMessage({
    channel,
    token,
    text,
  });
}

export async function getMessagePermalink(
  token: string,
  channel: string,
  messageTimestamp: string
): Promise<string> {
  return slack.chat
    .getPermalink({ token, channel, message_ts: messageTimestamp })
    .then((response) => response.permalink);
}

// frontend/lib/services/youtube/utils.ts
export type ParsedVideoTitle = {
  title: string;
  date: string;
  eventType: string;
};

export function parseVideoTitle(title: string): ParsedVideoTitle {
  const dashSplitRegex = /(.*?)-(.*)/;
  const colonSplitRegex = /(.*?):(.*)/;
  const quotesRegex = /"(.*?)"/g;

  const dashSplitMatch = dashSplitRegex.exec(title);
  const colonSplitMatch = colonSplitRegex.exec(title);
  const videoName = title
    .match(quotesRegex)
    ?.map((match) => match.replace(/"/g, ''));

  return {
    title: videoName ? videoName[0] : title,
    date: dashSplitMatch ? dashSplitMatch[2].trim() : '',
    eventType: colonSplitMatch ? colonSplitMatch[1].trim() : '',
  };
}

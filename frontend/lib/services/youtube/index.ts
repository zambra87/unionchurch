import { LiveStreamStatus } from './types';
export { getMockLatestServices, getMockLatestShepherdDesk } from './mocks';
export type { VideoRender, Video } from './types';

const YOUTUBE_API_BASE = 'https://www.googleapis.com/youtube/v3';

export async function getLiveStreamStatus(): Promise<LiveStreamStatus> {
  if (!process.env.YOUTUBE_KEY) {
    throw new Error('YouTube API key is not configured');
  }

  if (!process.env.YOUTUBE_CHANNEL_ID) {
    throw new Error('YouTube channel ID is not configured');
  }

  try {
    const res = await fetch(
      `${YOUTUBE_API_BASE}/search?` +
        new URLSearchParams({
          part: 'snippet',
          channelId: process.env.YOUTUBE_CHANNEL_ID,
          type: 'video',
          eventType: 'live',
          key: process.env.YOUTUBE_KEY,
        }),
      {
        next: {
          revalidate: 30,
        },
      }
    );

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.error?.message || 'Failed to check live status');
    }

    const data = await res.json();

    if (data.items.length === 0) {
      return {
        isLive: false,
        stream: null,
      };
    }

    const liveStream = data.items[0].snippet;

    return {
      isLive: true,
      stream: {
        video: {
          videoId: liveStream.id.videoId,
          kind: liveStream.id.kind,
        },
        title: liveStream.title,
        publishTime: liveStream.publishTime,
      },
    };
  } catch (error) {
    console.error('Error checking live status:', error);
    throw error;
  }
}

export async function getYouTubeVideos(playlistId: string) {
  if (!playlistId) {
    throw new Error('Playlist ID is required');
  }

  if (!process.env.YOUTUBE_KEY) {
    throw new Error('YouTube API key is not configured');
  }

  try {
    const res = await fetch(
      `${YOUTUBE_API_BASE}/playlistItems?` +
        new URLSearchParams({
          part: 'snippet,status',
          maxResults: '3',
          playlistId,
          key: process.env.YOUTUBE_KEY,
        }),
      {
        next: {
          revalidate: 3600,
        },
      }
    );

    if (!res.ok) {
      const error = await res.json();
      throw new Error(
        `YouTube API error: ${error.error?.message || 'Unknown error'}`
      );
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    throw error;
  }
}

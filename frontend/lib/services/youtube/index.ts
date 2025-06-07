import { LiveStreamStatus } from './types';
export { getMockLatestServices, getMockLatestShepherdDesk } from './mocks';
export type { VideoRender, Video } from './types';

const YOUTUBE_API_BASE = 'https://www.googleapis.com/youtube/v3';

export async function getLiveStreamStatus(): Promise<LiveStreamStatus> {
  if (!process.env.YOUTUBE_KEY) {
    throw new Error('YouTube API key is not configured');
  }

  try {
    const res = await fetch(
      `${YOUTUBE_API_BASE}/search?` +
        new URLSearchParams({
          part: 'snippet',
          channelId: process.env.YOUTUBE_CHANNEL_ID || '',
          type: 'video',
          eventType: 'live',
          key: process.env.YOUTUBE_KEY,
        }),
      {
        next: {
          revalidate: 60, // Cache for 1 minute since live status changes frequently
        },
      }
    );

    if (!res.ok) {
      const error = await res.json();
      throw new Error(
        `YouTube API error: ${error.error?.message || 'Unknown error'}`
      );
    }

    const data = await res.json();

    if (data.items.length === 0) {
      return {
        isLive: false,
        stream: null,
      };
    }

    // Get the first live stream
    const liveStream = data.items[0];

    return {
      isLive: true,
      stream: {
        id: liveStream.id.videoId,
        title: liveStream.snippet.title,
        description: liveStream.snippet.description,
        publishedAt: liveStream.snippet.publishedAt,
        thumbnailUrl: liveStream.snippet.thumbnails.high.url,
        channelTitle: liveStream.snippet.channelTitle,
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

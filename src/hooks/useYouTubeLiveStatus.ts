import { useState, useEffect } from 'react';

interface YouTubeLiveStatus {
  isLive: boolean;
  loading: boolean;
  error: string | null;
}

/**
 * Custom hook to check YouTube live streaming status
 * Currently returns mock data, but ready to integrate with YouTube Data API v3
 * 
 * To use with real API:
 * 1. Get YouTube Data API key from Google Cloud Console
 * 2. Replace MOCK_IS_LIVE with actual API call
 * 3. API endpoint: https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=YOUR_CHANNEL_ID&eventType=live&type=video&key=YOUR_API_KEY
 */
export const useYouTubeLiveStatus = (channelId?: string): YouTubeLiveStatus => {
  const [status, setStatus] = useState<YouTubeLiveStatus>({
    isLive: false,
    loading: true,
    error: null,
  });

  useEffect(() => {
    // Simulate API call with mock data
    const checkLiveStatus = async () => {
      try {
        // Mock: randomly return live status for demo purposes
        // In production, replace with actual YouTube API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const MOCK_IS_LIVE = Math.random() > 0.7; // 30% chance of being live
        
        setStatus({
          isLive: MOCK_IS_LIVE,
          loading: false,
          error: null,
        });
      } catch (error) {
        setStatus({
          isLive: false,
          loading: false,
          error: 'Failed to fetch live status',
        });
      }
    };

    checkLiveStatus();

    // Check every 60 seconds
    const interval = setInterval(checkLiveStatus, 60000);

    return () => clearInterval(interval);
  }, [channelId]);

  return status;
};

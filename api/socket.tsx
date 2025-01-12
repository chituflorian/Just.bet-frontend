import * as React from "react";

/**
 * Generic payload type for socket messages
 */
type Payload = { [key: string]: any };

/**
 * Base Socket class for handling WebSocket connections
 */
class Socket {
  private url: string;
  private params: Payload;
  private connection: WebSocket | null = null;

  /**
   * Creates a new Socket instance
   * @param url - WebSocket endpoint URL
   * @param params - Connection parameters
   */
  constructor(url: string, params: Payload = {}) {
    this.url = url;
    this.params = params;
  }

  /**
   * Establishes WebSocket connection
   */
  connect(): void {
    if (this.connection) return;
    this.connection = new WebSocket(this.url);
    // Add connection handling here
  }

  /**
   * Creates a new channel for specific events
   * @param channelName - Name of the channel to create
   * @param payload - Channel-specific payload
   */
  channel(channelName: string, payload: Payload = {}) {
    return new Channel(this, channelName, payload);
  }
}

/**
 * Channel class for handling specific event subscriptions
 */
class Channel {
  private socket: Socket;
  private name: string;
  private payload: Payload;
  private eventHandlers: Map<string, Set<(payload: Payload) => void>>;

  constructor(socket: Socket, name: string, payload: Payload) {
    this.socket = socket;
    this.name = name;
    this.payload = payload;
    this.eventHandlers = new Map();
  }

  /**
   * Subscribes to channel events
   * @returns Promise resolving on successful connection
   */
  join(): Promise<void> {
    // Implement join logic
    return Promise.resolve();
  }

  /**
   * Unsubscribes from channel events
   */
  leave(): void {
    // Implement leave logic
  }

  /**
   * Registers event handler
   * @param eventName - Name of the event to listen for
   * @param callback - Event handler function
   */
  on(eventName: string, callback: (payload: Payload) => void): void {
    if (!this.eventHandlers.has(eventName)) {
      this.eventHandlers.set(eventName, new Set());
    }
    this.eventHandlers.get(eventName)!.add(callback);
  }

  /**
   * Removes event handler
   * @param eventName - Name of the event
   * @param callback - Event handler function to remove
   */
  off(eventName: string, callback: (payload: Payload) => void): void {
    this.eventHandlers.get(eventName)?.delete(callback);
  }
}

/**
 * Singleton socket instance
 */
let socketInstance: Socket | null = null;
let sharedHeaders: Payload = {};

/**
 * Sets global headers for all socket connections
 * @param headers - Headers to be included in all connections
 */
export function setHeaders(headers: Payload): void {
  sharedHeaders = headers;
}

/**
 * Gets or creates socket connection
 * @returns Socket instance
 */
function getSocket(): Socket {
  if (!socketInstance) {
    socketInstance = new Socket("/api/socket");
    socketInstance.connect();
  }
  return socketInstance;
}

/**
 * Hook for subscribing to socket events
 * @param channelName - Name of the channel to subscribe to
 * @param callback - Event handler function
 * @param payload - Additional payload for the subscription
 */
export function useSubscription(
  channelName: string,
  callback: (payload: Payload) => void,
  payload: Payload = {},
): void {
  React.useEffect(() => {
    const socket = getSocket();
    const data = { ...sharedHeaders, ...payload };
    const channel = socket.channel(channelName, data);

    channel.on("event", callback);

    channel.join().catch((error) => {
      console.error("Socket subscription failed:", error);
    });

    return () => {
      channel.off("event", callback);
      channel.leave();
    };
  }, [channelName, callback, payload]);
}

export default {
  setHeaders,
  useSubscription,
};

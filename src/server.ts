import * as net from 'net';

enum ServerState {
  Stopped,
  Starting,
  Running,
  WaitingAuthentication,
  Stopping,
}

export class LinkwatchServer {
  private server: net.Server;
  private host: string;
  private port: number;
  private state: ServerState = ServerState.Stopped;

  constructor(host: string, port: number) {
    this.host = host;
    this.port = port;
    this.server = net.createServer((socket: net.Socket) => {
      this.connectEvents(socket);
    });
  }

  public listen() {
    if (this.state !== ServerState.Stopped) {
      throw new Error('Server is already running');
    }
    this.server.listen(this.port, this.host, () => {
      this.state = ServerState.Running;
    });
  }

  public close() {
    this.server.close((err: Error) => {
      if (err) {
        console.error(err);
      }
      this.state = ServerState.Stopped;
    });
    this.state = ServerState.Stopping;
  }

  private connectEvents(socket: net.Socket) {
    socket.on('data', this.onData);
    socket.on('end', this.onEnd);
  }

  private onData(data: Buffer) {}

  private onEnd() {
    // Handle socket closing
  }
  private onError(error: Error) {
    // Handle error
  }
}

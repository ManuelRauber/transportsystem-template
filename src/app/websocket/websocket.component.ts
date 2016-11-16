import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-websocket',
  templateUrl: './websocket.component.html',
  styleUrls: ['./websocket.component.css']
})
export class WebsocketComponent {

  private _ws: WebSocket;

  public command: string;

  public history: Array<string> = [];

  // TODO: In einen Angular 2 Service schieben
  constructor() { }

  public connect() {
    this._ws = new WebSocket('ws://192.168.0.1:8080');

    this._ws.onmessage = event => {
      this.history.push('[SERVER] ' + event.data);
    };
  }

  public send() {
    if (!this.command) {
      return;
    }

    this.history.push('[CLIENT] ' + this.command);

    this._ws.send(this.command);

    this.command = '';
  }
}

import Event from '../struct/Event';

class Ready extends Event {
  constructor() {
    super("ready");
  }

  run() {
    console.log('Iniciado como: ' + this.client.user.tag);
  }
}

export default Ready;

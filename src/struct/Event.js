class Event {
  constructor(eventName) {
    if (!eventName) throw new Error('An eventName is needed.');

    this.eventName = eventName;
  }

  register(client) {
    this.client = client;
    
    client.on(this.eventName, (...args) => {
      this.run(...args);
    });
  }
}

export default Event;

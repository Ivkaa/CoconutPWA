import Vue from 'vue'
import App from './App.vue'

new Vue({

  // We want to target the div with an id of 'events'
  el: '#events',

  render: h => h(App),

  // Here we can register any values or collections that hold data
  // for the application
  data: {
    event: { name: '', description: '', date: '' },
    events: []
  },

  // Anything within the ready function will run when the application loads
  created() {
       this.fetchEvents();
   },

  // Methods we want to use in our application are registered here
  methods: {
    // We dedicate a method to retrieving and setting some data
    fetchEvents: function() {
      var events = [
        {
          id: 1,
          name: 'Coconut cake',
          description: 'Toronto International Film Festival',
          date: '2015-09-10'
        },
        {
          id: 2,
          name: 'Coconut cheesecake',
          description: 'The Martian comes to theatres.',
          date: '2015-10-02'
        },
        {
          id: 3,
          name: 'Coconut icecream',
          description: 'Music, film and interactive festival in Austin, TX.',
          date: '2016-03-11'
        }
      ];

      // Set the collection of events
      this.events = events;

      // or push them on separately
      // for (var i in events) {
      //   this.events.push(events[i]);
      // }
    },

    // Adds an event to the existing events array
    addEvent: function() {
      if(this.event.name) {
        this.events.push(this.event);
        this.event = { name: '', description: '', date: '' };
      }
    },

    deleteEvent: function(index) {
      if(confirm("Are you sure you want to delete this event?")) {
        // $remove is a Vue convenience method similar to splice
        this.events.splice(index, 1);
      }
    }
  }
})

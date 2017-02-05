<template lang="html">
    <div>
    <!-- event form -->
    <div class="col-sm-6">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3>Add an Event</h3>
        </div>
        <div class="panel-body">

          <div class="form-group">
            <input class="form-control" placeholder="Event Name" v-model="event.name">
          </div>

          <div class="form-group">
            <textarea class="form-control" placeholder="Event Description" v-model="event.description"></textarea>
          </div>

          <div class="form-group">
            <input type="date" class="form-control" placeholder="Date" v-model="event.date">
          </div>

          <button class="btn btn-primary" v-on:click="addEvent">Submit</button>

        </div>
      </div>
    </div>
    <!-- show the events -->
    <div class="col-sm-6">
      <div class="list-group">
        <a href="#" class="list-group-item" v-for="(event, index) in events">
          <h4 class="list-group-item-heading">
            <i class="glyphicon glyphicon-bullhorn"></i>
            {{ event.name }}
          </h4>

          <h5>
            <i class="glyphicon glyphicon-calendar" v-if="event.date"></i>
            {{ event.date }}
          </h5>

          <p class="list-group-item-text" v-if="event.description">{{ event.description }}</p>

          <button class="btn btn-xs btn-danger" v-on:click="deleteEvent(index)">Delete</button>
        </a>
      </div>
    </div>
    </div>
</template>

<script>
export default {

      // Here we can register any values or collections that hold data
      // for the application
      data() {
        return {
            event: { name: '', description: '', date: '' },
            events: []
        }
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
}
</script>

<style lang="css">
</style>

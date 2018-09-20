const Interactions=
    {
      type: 'native',
      events: {
        mousemove: function(e) {
          this.chart.component('custom-tooltip').emit('hover', e);
        }
      }
    }
  
  module.exports=Interactions
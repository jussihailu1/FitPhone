<template>
    <div>
        <md-field>
            <label for="hour">Hour</label>
            <md-select v-model="hour" name="Hour" id="hour">
                <md-option v-for="index in 23" :key="index" :value="index">{{index}}</md-option>
            </md-select>
        </md-field>
        <md-field>
            <label for="minute">Minute</label>
            <md-select v-model="minute" name="Minute" id="minute">
                <md-option v-for="index in 59" :key="index" :value="index">{{index}}</md-option>
            </md-select>
        </md-field>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                hour: 0,
                minute: 0
            }
        },
        methods: {
            // setAlarm: function(el) {
            //     if(isNaN(time)){
            //         alert("Invalid DateTime");
            //         return;
            //     }
 
            //     var alarm = new Date(time);
            //     var alarmTime = new Date(alarm.getUTCFullYear(), alarm.getUTCMonth(), alarm.getUTCDate(), alarm.getUTCHours(), alarm.getUTCMinutes(), alarm.getUTCSeconds());
            //     var duration = alarmTime.getTime() - (new Date()).getTime();
 
            //     if(duration < 0){
            //         alert('Time is already passed');
            //         return;
            //     }
 
            //     timer = setTimeout(initAlarm, duration);
            //     el.innerHTML = "<span class='glyphicon glyphicon-remove'></span> Cancel Alarm";
            //     el.setAttribute('onclick', 'cancelAlarm(this);');
            //     el.setAttribute('class', 'btn btn-danger');
            // },
            // cancelAlarm: function(el) {
            //     el.innerHTML = "<span class='glyphicon glyphicon-time'></span> Set Alarm";
            //     el.setAttribute('onclick', 'setAlarm(this);');
            //     el.setAttribute('class', 'btn btn-success');
            //     clearTimeout(timer);
            // },
            // initAlarm: function() {
            //     sound.loop = true;
            //     sound.play();
            //     document.getElementById('alarmButton').style.display = 'none';
            //     document.getElementById('selectButton').style.display = '';
            // },
            // stopAlarm: function(){
            //     sound.pause();
            //     sound.currentTime = 0;
            //     document.getElementById('selectButton').style.display = 'none';
            //     cancelAlarm(document.getElementById('alarmButton'));
            //     document.getElementById('alarmButton').style.display = '';
            // },
            // snoozeAlarm: function(){
            //     stopAlarm();
            //     setTimeout(initAlarm, 300000);
            //     button.innerText = "Cancel Alarm";
            //     button.setAttribute('onclick', 'cancelAlarm(this);');
            // }
        }
    }
</script>
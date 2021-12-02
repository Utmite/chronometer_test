<template>
<section class="chronometer">
    <div
      class="flex items-center justify-center overflow-hidden rounded-full bottom-5 left-5"
    >
      <!-- Building a Progress Ring: https://css-tricks.com/building-progress-ring-quickly/ -->
      <svg class="w-40 h-40">
        <circle
          class="text-gray-300"
          stroke-width="5"
          stroke="currentColor"
          fill="transparent"
          r="60"
          cx="80"
          cy="80"
        />
        <circle
          class="text-blue-600"
          stroke-width="5"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="circumference - percent / 100 * circumference"
          stroke-linecap="round"
          stroke="currentColor"
          fill="transparent"
          r="60"
          cx="80"
          cy="80"
        />
      </svg>
      <span class="absolute text-xl font-bold text-blue-700 ml-1">{{percent}}%</span>
    </div>
    <div class="flex justify-center mb-2 flex-col w-full">
        <input type="number" v-model="h" placeholder="Horas" class="border-gray-200 border-2 rounded-md	px-5">
        <input type="number" v-model="m" placeholder="Minutos" class="border-gray-200 border-2 px-5 rounded-md my-2	">
        <input type="number" v-model="s" placeholder="Segundos" class="border-gray-200 border-2 px-5 rounded-md	">
    </div>
    <div class="text-center text-2xl mb-3">
                <h3>{{all_time_b}}</h3>

    </div>
    <div class="flex justify-center items-center">
        <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-6 border-b-4 border-blue-700 hover:border-blue-500 rounded" @click="start(mode)">
            {{mode}}
        </button>
        <button class="uppercase p-3 flex items-center bg-red-500 text-blue-50 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12 mx-5 " @click="restart()">
			<svg width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32" style="transform: rotate(360deg);"><path d="M12 12h2v12h-2z" fill="currentColor"></path><path d="M18 12h2v12h-2z" fill="currentColor"></path><path d="M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20z" fill="currentColor"></path><path d="M12 2h8v2h-8z" fill="currentColor"></path></svg>
		</button>
    </div>
</section>
</template>
<script>
var chronometer_info = null
var audio = null

export default {
    name:"Chronometer",
    data(){
        return {
            circumference: 60 * 2 * Math.PI,
            percent: 0,
            h: null,
            m: null,
            s: null,
            all_time_b: "Esperando...",
            all_time: null,
            all_time_o: null,
            mode: "Start"
        }
    },
    methods: {
        start(mode){

            if(mode === "Start"){
            
                
                this.all_time = this.h * 60 * 60 + this.m * 60 + this.s
                this.all_time_o = this.all_time
                this.all_time_b = Math.floor(this.all_time / (60*60)) + "hh:" +  Math.floor(this.all_time % (60*60) / 60)+"mm:" + Math.floor(this.all_time % (60*60) % 60)+":ss"

                let dif = this.all_time_o - this.all_time

                this.percent = Math.floor((dif * 100) / this.all_time_o)

                audio = new Audio()

                audio.src = "/chronometer_test/alarma.mp3"
                
                chronometer_info = setInterval(() => {

                    if(this.mode === "Pause" && this.all_time !== 0) this.all_time--;

                    if(this.all_time === 0){
                        
                        audio.loop = true
                        audio.play()

                        clearInterval(chronometer_info)
                    }

                    this.all_time_b = Math.floor(this.all_time / (60*60)) + "hh:" +  Math.floor(this.all_time % (60*60) / 60)+"mm:" + Math.floor(this.all_time % (60*60) % 60)+":ss"

                    dif = this.all_time_o - this.all_time

                    this.percent = Math.floor((dif * 100) / this.all_time_o)

                    console.log(this)

                }, 1000);

                this.mode = "Pause"

            }else if(mode === "Pause") {
                this.mode = "Restart"
            }else if(mode === "Restart") {this.mode = "Pause"}

        },
        restart(){
            this.percent = 0;
            this.mode = "Start"
            this.h = null
            this.m = null
            this.s = null
            clearInterval(chronometer_info)
            audio.pause()
        }
    }
}
</script>
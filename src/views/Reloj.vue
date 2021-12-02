<template>
   <div class="reloj">
       <h1 class="text-center text-4xl mt-12 font-bold">
           {{fecha}}
       </h1>
    </div> 
</template>
<script>

export default {
    name: "Reloj",
    data(){
        return {
            fecha: new Date()
        }
    },
    created(){
        setInterval(() => {
            this.fecha = new Date()            
        }, 1000);
    }
}
</script>
<template>
   <div class="count">
       <Chronometer/>
    </div> 
</template>
<script>
import Chronometer from "../components/Chronometer.vue"

export default {
    name: "Count",
    components: {
        Chronometer,
    }
}
</script>
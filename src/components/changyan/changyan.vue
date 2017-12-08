<template>
    <div id="SOHUCS" :sid="sid" ></div>
</template>
<script>
import "./cy";

export default {
    name: "discus-box",
    props: {
        sid: String,
        require: true
    }
}
</script>

<template>
    <footer class="bg-dark">
        <router-link class="btn btn-primary" :to="'/HomeCard'">See Detail Char In Here</router-link>
        <p class="copyright bg-dark">
            2023 &copy; Pemrograman Web 1
        </p>
    </footer>
</template>

<script>
export default {
    name: "FooterS",
};
</script>

<style>
footer .copyright {
    margin-top: 15px;
    text-align: center;
    font-size: 13px;
    color: #ffffff;
}</style>
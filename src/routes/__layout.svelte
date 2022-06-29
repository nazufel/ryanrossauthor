<script>
  import "../app.css";
</script>


<slot />

<footer class="footer bg-secondary footer-center p-4 text-base-content">
    <div>
        <p class="text-base-300">{'Copyright © '} {new Date().getFullYear()} - Ryan Ross | <a class="link link-neutral" href="/privacy">Privacy Policy</a></p>
    </div>
</footer>

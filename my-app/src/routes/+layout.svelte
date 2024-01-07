<script>
import "../app.css";
import Navbar from "$lib/navbar.svelte";

/**
 * Prevent Ctrl+R
 * @param {KeyboardEvent} event
 */
function handleKeydown(event) {
    if (event.key === "R" && event.ctrlKey) {
        console.log("I won't let you do that");
        event.preventDefault();
    }
}
</script>
<div role="button" tabindex="0" on:keydown={handleKeydown}>
    <Navbar />
    <slot></slot>
</div>

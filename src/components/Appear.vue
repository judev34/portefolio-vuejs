<template>
  <transition appear v-bind:css="false" v-on:before-enter="beforeEnter" v-on:enter="enter" >
      <slot></slot>
  </transition>
</template>

<script>
export default {
    props: {
        duration: {
            type: Number,
            default: 500
        },
        delay: {
            type: Number,
            default: 100
        },
        transition: []
    },
    methods: {
        beforeEnter(el) {
            el.style.opacity = 0;
            if (this.transition) {
                el.style.transform = 'translate('+this.transition.join(',')+')';
            }
        },
        enter(el) {
            let transitions = 'opacity '+this.duration+'ms ease-in-out '+this.delay+'ms';
            if (this.transition) {
                transitions += ', transform '+this.duration+'ms ease-in-out '+this.delay+'ms';
            }

            getComputedStyle(el);
            
            el.style.transition = transitions;

            setTimeout(() => {
                el.style.opacity = 1;
                if (this.transition) {
                    el.style.transform = 'initial';
                }
            }, 1000);
        }
    }
}
</script>

<style>

</style>
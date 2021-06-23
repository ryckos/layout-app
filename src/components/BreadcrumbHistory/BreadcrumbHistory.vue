<template>
  <div v-if="!excluded">
    <b-breadcrumb class="breadcrumbHistory" :items="tree"></b-breadcrumb>
  </div>
</template>
<script>
  export default {
    name: 'BreadcrumbHistory',
    props: {
      exclude: {type: Array, default: () => []}
    },
    computed: {
      excluded() {
        return this.exclude.indexOf(this.$route.path.split('/').pop()) > -1;
      },
      tree() {
        return ['YOU ARE HERE']
          .concat(this.$route.path
            .split('/')
            .slice(1)
            .map(route => route
              .split('-')
              .map(word => word[0].toUpperCase() + word.slice(1))
              .join(' ')
            )
          );
      }
    }
  }
</script>
<style lang="css">

  @media(max-width: 370px){
    /* make the breadcrumbHistory inline*/
    .breadcrumb > .breadcrumb-item{
      font-size: 0.8rem;
    }
  }

  @media(min-width: 992px){
    .breadcrumb > .breadcrumb-item{
      color: goldenrod;
    }
  }
</style>

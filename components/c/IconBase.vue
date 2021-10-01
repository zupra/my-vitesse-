<template>
  <svg xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 16 16"
    :aria-labelledby="iconName"
    role="presentation"
  >
    <title
      :id="iconName"
    >{{iconName}} icon</title>
    <g :fill="color">
      <slot />


<!-- <path d="M4.5 1C4.5 0.447715 4.94772 0 5.5 0H10.5C11.0523 0 11.5 0.447715 11.5 1C11.5 1.55228 11.0523 2 10.5 2H9V3.07645C12.1151 3.55745 14.5 6.25021 14.5 9.5C14.5 13.0899 11.5899 16 8 16C4.41015 16 1.5 13.0899 1.5 9.5C1.5 7.37277 2.5231 5.48457 4.09939 4.30046C4.54096 3.96875 5.16783 4.05781 5.49954 4.49939C5.83125 4.94096 5.74219 5.56783 5.30061 5.89954C4.20534 6.72231 3.5 8.02861 3.5 9.5C3.5 11.9853 5.51472 14 8 14C10.4853 14 12.5 11.9853 12.5 9.5C12.5 7.01472 10.4853 5 8 5C7.44772 5 7 4.55228 7 4V2H5.5C4.94772 2 4.5 1.55228 4.5 1Z" fill="#3D75E4"/>
<path d="M8.98189 7.16442C9.84889 7.46459 10.5355 8.15117 10.8356 9.01816C11.0163 9.54005 10.5523 10.0001 10 10.0001H9C8.44772 10.0001 8 9.55234 8 9.00005V8.00005C8 7.44777 8.46 6.98374 8.98189 7.16442Z" fill="#3D75E4"/> -->


    </g>
  </svg>
</template>

<script>

const iconSet = {
  eye: {

  }
}



export default {
  props: {
    iconName: {
      type: String,
      default: 'box'
    },
    width: {
      type: [Number, String],
      default: 18
    },
    height: {
      type: [Number, String],
      default: 18
    },
    color: {
      type: String,
      default: '#3D75E4', //'currentColor'
    }
  }
}
</script>

<style>

</style>
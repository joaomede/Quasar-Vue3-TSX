import { defineComponent } from 'vue'

/**
 * Component Test
 */
export const ComponentTest = defineComponent({
  props: {
    message: {
      type: String
    }
  },
  setup(props) {
    return () => {
      return <div>{props.message}</div>
    }
  }
})

import { defineComponent } from 'vue'
import { QCard as Card } from 'quasar'

export const ComponentTestOther = defineComponent({
  setup() {
    const QCard = Card as any

    return () => <QCard>teste</QCard>
  }
})

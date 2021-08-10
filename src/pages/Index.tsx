import { defineComponent } from 'vue'
import { QBtn as Btn, QCard as Card } from 'quasar'
import { ComponentTest } from './componentTest'
import { ComponentTestOther } from './componentTestOther'

/**
 * Render a Button Component from Quasar
 */
function renderButton(label: string) {
  const QBtn = Btn as any
  return <QBtn color={'blue'} label={label} />
}

export default defineComponent({
  setup() {
    const QCard = Card as any
    return () => (
      <QCard style={{ width: '100%', 'max-width': '500px' }}>
        {renderButton('button label')}
        <ComponentTest message={'Message Test Here!'} />
        <ComponentTestOther></ComponentTestOther>
      </QCard>
    )
  }
})

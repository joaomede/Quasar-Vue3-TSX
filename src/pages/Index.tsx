import { defineComponent } from 'vue'
import {
  QBtn as Btn,
  QCard as Card,
  QCardActions as CardActions,
  QCardSection as CardSection
} from 'quasar'
import { TextComponent } from './textComponent'

export default defineComponent({
  setup() {
    // the quasar component does not return the
    // correct type, to correct, use as "any" type
    const QCard = Card as any
    const QCardActions = CardActions as any
    const QBtn = Btn as any
    const QCardSection = CardSection as any

    /**
     * Render a Button Component from Quasar
     * - funciton render example
     */
    function renderButton(label: string) {
      return <QBtn color={'blue'} label={label} />
    }

    return () => (
      <QCard style={{ width: '100%', 'max-width': '500px' }}>
        <QCardSection>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </QCardSection>

        <TextComponent message={'Message Test Here!'} />

        <QCardActions>{renderButton('button label')}</QCardActions>
      </QCard>
    )
  }
})

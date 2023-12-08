import mitt from 'mitt'

type Events = {
  test: string
}

export default mitt<Events>()

import {
  getTime,
  getCurrentTime,
} from '@/utils/time'

const DEFAULT_DAY_START = getTime(5, 30)
const DEFAULT_DAY_END = getTime(21, 0)

// https://vuejs.org/v2/guide/state-management.html#Simple-State-Management-from-Scratch
const store = {
  debug: true,
  state: {
    dayStart: new Date(DEFAULT_DAY_START),
    dayEnd: new Date(DEFAULT_DAY_END),
    dayProcent: 0,
  },
  log(args) {
    if (this.debug) console.log.apply(args)
  },
  updateDayProcent() {
    const now = getCurrentTime()
    const {dayStart, dayEnd} = this.state
    this.state.dayProcent = (now - dayStart) / (dayEnd - dayStart)
    console.log('updateDayProcent', this.state.dayProcent)
  },
}

setInterval(() => {
  store.updateDayProcent()
}, 1000)

export default store;
import Notifications from './Notifications.vue'

const NotificationStore = {
  state: [], // here the notifications will be added
  settings: {
    overlap: false,
    verticalAlign: 'top',
    horizontalAlign: 'center',
    type: 'success',
    timeout: 1000,
    closeOnClick: true,
    showClose: true
  },
  setOptions (options) {
    this.settings = Object.assign(this.settings, options)
  },
  setType (type) {
    this.settings.type = type
  },
  removeNotification (timestamp) {
    const indexToDelete = this.state.findIndex(n => n.timestamp === timestamp)
    if (indexToDelete !== -1) {
      this.state.splice(indexToDelete, 1)
    }
  },
  addNotification (notification) {
    if (typeof notification === 'string' || notification instanceof String) {
      notification = { message: notification }
    }
    notification.timestamp = new Date()
    notification.timestamp.setMilliseconds(
      notification.timestamp.getMilliseconds() + this.state.length
    )
    console.log(this.settings)
    notification = Object.assign({}, this.settings, notification)
    this.state.push(notification)
  },
  notify (notif) {
    console.log('deep in notify, notif=')
    this.setType(notif.type)
    if (Array.isArray(notif)) {
      notif.forEach(notificationInstance => {
        this.addNotification(notificationInstance.message)
      })
    } else {
      this.addNotification(notif.message)
    }
  }
}

const NotificationsPlugin = {
  install (Vue, options) {
    let app = new Vue({
      data: {
        notificationStore: NotificationStore
      },
      methods: {
        notify (notification) {
          this.notificationStore.notify(notification)
        }
      }
    })
    Vue.prototype.$notify = app.notify
    Vue.prototype.$notifications = app.notificationStore
    Vue.component('Notifications', Notifications)
    if (options) {
      NotificationStore.setOptions(options)
    }
  }
}

export default NotificationsPlugin

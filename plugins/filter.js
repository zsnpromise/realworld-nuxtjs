import vue from 'vue'
import dayjs from 'dayjs'
vue.filter('time', (value, format = 'YYYY MM DD : HH-mm-ss') => {
    return dayjs(value).format(format)
})
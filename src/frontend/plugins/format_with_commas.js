import Vue from "vue"

Vue.prototype.$format_with_commas = function f(num, fix_to_two_decimals) {
  if (isNaN(num) || num === null) {
    return
  }
  const is_num_long_enough = num.toString().includes('.') ? num.toString().length > 6 : num >= 1000
  if (is_num_long_enough) {
    num = parseFloat(num).toFixed(2)
    return parseFloat(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  } else {
    if (fix_to_two_decimals) num = parseFloat(num).toFixed(2)
    return num
  }
}

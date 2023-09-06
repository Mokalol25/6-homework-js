const subscribe = prompt("Напишіть яку ви маєте підписку(free, pro, vip)");
if (subscribe === 'pro' || subscribe === 'vip' ) {
    console.log("Доступ надано")
} else {
    console.log("Доступ не надано")
}
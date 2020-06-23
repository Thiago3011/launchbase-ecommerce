module.exports = {
  date (timestamp) {
    const date = new Date(timestamp)

    const year = date.getFullYear()
    const month = `0${date.getMonth() + 1}`.slice(-2)
    const day = `0${date.getDate()}`.slice(-2)
    const hour = date.getHours()
    const minutes = date.getMinutes()

    return {
      day,
      month,
      year,
      hour,
      minutes,
      iso: `${year}-${month}-${day}`,
      birthDay: `${day}/${month}`,
      format: `${day}/${month}/${year}`
    }
  },
  formatPrice (price) {
    const formatted = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
      .format(price / 100) // 0,000.00
      .split('.') // [0,000] e [00]

    return `${formatted[0].split(',').join('.')},${formatted[1]}` // [0] e [000] => 0.000 => 0.000,00
  },
  formatCpfCnpj (value) {
    value = value.replace(/\D/g, '')

    if (value.length > 14) {
      value = value.slice(0, -1)
    }

    // check if is cnpj or cpf
    if (value.length > 11) {
      value = value.replace(/(\d{2})(\d)/, '$1.$2')
      value = value.replace(/(\d{3})(\d)/, '$1.$2')
      value = value.replace(/(\d{3})(\d)/, '$1/$2')
      value = value.replace(/(\d{4})(\d)/, '$1-$2')
    } else {
      value = value.replace(/(\d{3})(\d)/, '$1.$2')
      value = value.replace(/(\d{3})(\d)/, '$1.$2')
      value = value.replace(/(\d{3})(\d)/, '$1-$2')
    }

    return value
  },
  formatCep (value) {
    value = value.replace(/\D/g, '') // Expressoes regulares

    if (value.length > 8) {
      value = value.slice(0, -1)
    }

    value = value.replace(/(\d{5})(\d)/, '$1-$2')

    return value
  }
}

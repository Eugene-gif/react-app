function useFormatDate(date) {
  if (typeof date === 'object') {
    return new Intl.DateTimeFormat('ru-RU').format(date);
  }
  if (typeof date === 'string' && !/^\d{2}\.\d{2}\.\d{4}$/.test(date)) {
    return 'Неверный формат. Ожидается: дд.мм.гггг';
  }

  return date;
}

export default useFormatDate;

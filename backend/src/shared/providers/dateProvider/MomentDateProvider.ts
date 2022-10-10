import { IDateProvider } from './IDateProvider';

class DateProvider implements IDateProvider {
  dateNowISO(): string {
    return new Date().toISOString();
  }
}

export { DateProvider };
